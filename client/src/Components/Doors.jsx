import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import Table from 'react-bootstrap/Table'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  mediaFront: {
    height: 240,
    width: '49%',
    float: 'left',
  },
  mediaBack: {
    height: 240,
    width: '49%',
    float: 'right',
  },
  mediaBackInterior: {
    height: 240,
    width: '49%',
    float: 'none',
    margin: '0 auto',
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
})
const useStyle = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  save: {
    float: 'right',
  },
  adminDoor: {
    height: '200px',
    marginLeft: '20px',
    marginRight: '50px',
  },
  adminBackDoor: {
    height: '100px',
    marginLeft: '20px',
    marginRight: '50px',
  },
  flex: {
    display: 'flex',
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexDirectionEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-End',
  },
}))

export default function Doors({selectedDoors}) {
  // const [doors, setDoors] = useState([]);
  const [open, setOpen] = useState(false)
  const [openInterior, setOpenInterior] = useState(false)
  // const [value, setValue] = useState({})
  const [selectedDoor, setSelectedDoor] = useState(null)

  const classes = useStyles()
  const classe = useStyle()

  const handleClickOpen = (door) => {
    setSelectedDoor(door)
    setOpen(true)
  }
  const handleClickOpenInterior = (door) => {
    setSelectedDoor(door)
    setOpenInterior(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOpenInterior(false)
  }

  const onChange = event => {
    // wait for state last updated version, because state next version depends on prev version
    setSelectedDoor((selectedDoor) => ({
      ...selectedDoor,
      [event.target.name]: event.target.value,
    }))
  }
  const onLittleChange = (value, arrayName, name, index) => {
    setSelectedDoor((selectedDoor) => {
      console.log(selectedDoor)
      const newArray = [...selectedDoor[arrayName]]
      const field = newArray[index]
      field[name] = value

      return {
        ...selectedDoor,
        [arrayName]: newArray,
      }
    })
  }

  return (
    <>
      {!selectedDoors.length ? (
        <h2>Loading...</h2>
      ) : (
        selectedDoors.map((res, index) => {
          return (
            <>
              {
                'interior' === res.category ?
                  (
                    <Grid item xs={6} md={3} lg={3} key={index}>
                      <Card className={classes.root} onClick={() => handleClickOpenInterior(res)}>
                        <CardActionArea>

                          <CardMedia
                            className={classes.mediaBackInterior}
                            image={res.otherColor ? res.otherColor[0].image : ''}
                          />
                          <div>
                            <CardContent>
                              <Typography variant="h5" component="h3">
                                {res.title}
                              </Typography>
                            </CardContent>
                          </div>
                        </CardActionArea>
                        <CardActions>
                          <Typography component="p">{res.priceFront} руб</Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  ) : (
                    <Grid item xs={6} md={3} lg={3} key={index}>
                      <Card className={classes.root} onClick={() => handleClickOpen(res)}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.mediaFront}
                            image={res.frontImage}
                          />
                          <CardMedia
                            className={classes.mediaBack}
                            image={res.otherColor ? res.otherColor[0].image : ''}
                          />
                          <CardContent>
                            <Typography variant="h5" component="h3">
                              {res.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Typography component="p">{res.price} руб</Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  )
              }
            </>
          )
        })
      )}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar className={classe.appBar}>
          <Toolbar className={classe.flexBetween}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleClose}>
              САХРАНИТЬ
            </Button>
          </Toolbar>
        </AppBar>

        {selectedDoor && (
          <>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Дверь с наружи</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <img
                    alt="Remy Sharp"
                    src={selectedDoor.frontImage}
                    className={classe.adminDoor}
                  />
                  <input type="file" name="frontImage"/>
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Панель для входных дверей</th>
                <th>Цена</th>
                <th>Цвет</th>
                <th>Сторона</th>
                <th>Зарисовка</th>
                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input type="file" name="frontImageInsert"/>
                </td>
                <td>
                  <input type="text" name="priceInsert"/>
                </td>
                <td>
                  <input type="text" name="colorInsert"/>
                </td>
                <td>
                  <input type="text" name="sideInsert"/>
                </td>
                <td>
                  <input type="text" name="pictureInsert"/>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Добавить
                  </Button>
                </td>
              </tr>
              {selectedDoor.otherColor && selectedDoor.otherColor.map((res, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        alt="Remy Sharp"
                        src={res.image}
                        className={classe.adminBackDoor}
                      />
                      <input type="file" name="littleImage"
                             onChange={(event) => {
                               onLittleChange(event.target.value, 'otherColor', 'image', index)
                             }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="littlePrice"
                        onChange={(event) => {
                          onLittleChange(event.target.value, 'otherColor', 'price', index)
                        }}
                        defaultValue={res.price}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="littleColor"
                        onChange={(event) => {
                          onLittleChange(event.target.value, 'otherColor', 'color', index)
                        }}
                        defaultValue={res.color}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="littleSide"
                        onChange={(event) => {
                          onLittleChange(event.target.value, 'otherColor', 'side', index)
                        }}
                        defaultValue={res.side}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="LittlePicture"
                        onChange={(event) => {
                          onLittleChange(event.target.value, 'otherColor', 'picture', index)
                        }}
                        defaultValue={res.picture}
                      />
                    </td>
                    <td>
                      <Button variant="contained" color="primary">
                        Обнавить
                      </Button>
                    </td>
                    <td>
                      <Button variant="contained" color="secondary">
                        Удалить
                      </Button>
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Производитель</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.manufacturer}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Имя</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.title}
                    style={{width: '90%'}}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Размер дверного блока</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.doorBlockSize}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Серия</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.series}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Толщина полотна (мм)</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.metalSheetThickness}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Толщина листа металла (мм.)</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.thickness}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Класс прочности</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.strengthClass}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Значение по эксплутационным характеристикам</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.performanceValue}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Класс устойчивости к взлому</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.burglarResistanceClass}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Количество петель</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.numberOfLoops}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Противосъемы</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.antiSeize}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Регулировка прижима</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.clipAdjustment}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Коробка</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.box}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Вылет наличника от короба</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.platbandDepartureFromTheBox}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Крепление</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.mount}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Утеплитель</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.insulation}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Усиление замковой зоны</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.castleStrengthening}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Ночная задвижка</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.nightValve}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Терморазрыв</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.thermalBreak}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Цинкогрунт</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.zinkogrunt}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Вес двери</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.doorWeight}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Цена</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.price}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Дополнительные фото</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input type="file"/>
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Добавить
                  </Button>
                </td>
              </tr>
              {selectedDoor.moreImage && selectedDoor.moreImage.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img alt="Remy Sharp" src={item.image} className={classe.adminDoor}/>
                      <input type="file" name="littleSlide"
                             onChange={(event) => {
                               onLittleChange(event.target.value, 'moreImage', 'image', index)
                             }}
                      />
                    </td>
                    <td>
                      <Button variant="contained" color="primary">
                        Обнавить
                      </Button>
                    </td>
                    <td>
                      <Button variant="contained" color="secondary">
                        Удалить
                      </Button>
                    </td>
                  </tr>
                )
              })
              }
              </tbody>
            </Table>
          </>
        )}
      </Dialog>
      <Dialog fullScreen open={openInterior} onClose={handleClose}>
        <AppBar className={classe.appBar}>
          <Toolbar className={classe.flexBetween}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleClose}>
              САХРАНИТЬ
            </Button>
          </Toolbar>
        </AppBar>

        {selectedDoor && (
          <>

            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Панель для межкомнотных дверей</th>
                <th>Цвет</th>
                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input type="file" name="frontImageInsert"/>
                </td>
                <td>
                  <input type="text" name="colorInsert"/>
                </td>

                <td>
                  <Button variant="contained" color="secondary">
                    Добавить
                  </Button>
                </td>
              </tr>
              {selectedDoor.otherColor && selectedDoor.otherColor.map((res, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        alt="Remy Sharp"
                        src={res.image}
                        className={classe.adminBackDoor}
                      />
                      <input type="file" name="littleImage"
                             onChange={(event) => {
                               onLittleChange(event.target.value, 'otherColor', 'image', index)
                             }}
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        name="littleColor"
                        onChange={(event) => {
                          onLittleChange(event.target.value, 'otherColor', 'color', index)
                        }}
                        defaultValue={res.color}
                      />
                    </td>
                    <td>
                      <Button variant="contained" color="primary">
                        Обнавить
                      </Button>
                    </td>
                    <td>
                      <Button variant="contained" color="secondary">
                        Удалить
                      </Button>
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Производитель</th>
                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.manufacturer}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Имя</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.title}
                    style={{width: '90%'}}
                    onChange={onChange}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Размер дверного блока</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.doorBlockSize}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Серия</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.series}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Внутреннее наполнение</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.inside}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Покрытие</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.coating}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Тип остекления</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.glazing}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Цена за полотно</th>

                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.priceFront}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
              <tr className="text-light bg-dark">
                <th>Цена за комплект</th>
                <th>Обнавить</th>
                <th>Удалить</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    defaultValue={selectedDoor.fullPrice}
                    style={{width: '90%'}}
                  />
                </td>
                <td>
                  <Button variant="contained" color="primary">
                    Обнавить
                  </Button>
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Удалить
                  </Button>
                </td>
              </tr>
              </tbody>
            </Table>
          </>
        )}
      </Dialog>

      
    </>
  )
}
