import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import doors from "../doors";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import Table from "react-bootstrap/Table";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  mediaFront: {
    height: 240,
    width: "49%",
    float: "left"
  },
  mediaBack: {
    height: 240,
    width: "49%",
    float: "right"
  }
});
const useStyle = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  save: {
    float: 'right',
  },
  adminDoor: {
    height: '200px',
    marginLeft: '20px',
    marginRight: '50px'
  },
  adminBackDoor: {
    height: '100px',
    marginLeft: '20px',
    marginRight: '50px'
  },
  flex: {
    display: 'flex'
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  flexDirectionEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-End'
  }
}));
export default function IronDoors({openInsert, setOpenInsert}) {
  const [ironDoor, setIronDoors] = useState({});
  const [openIron, setOpenIron] = useState(false);
  const inpRef = useRef();
  const classes = useStyles();
  const classe = useStyle();

  const handleClickOpen = () => {
    setOpenIron(true);
  };

  const handleClose = () => {
    setOpenIron(false);
  };

  let iron = doors.filter(item => {
    if (item.category === "iron") {
      return item;
    }
  });
  useEffect(() => {
    setIronDoors(iron);
  }, []);

  return (
    <>
      {!ironDoor.length ? (
        <h2>Loading...</h2>
      ) : (
        ironDoor.reverse().map((res, index) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={index}>
              <Card
                className={classes.root}
                onClick={handleClickOpen}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.mediaFront}
                    image={res.frontImage}
                  />
                  <CardMedia
                    className={classes.mediaBack}
                    image={res.backImage}
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
          );
        })
      )}
      <Dialog fullScreen open={openIron} onClose={handleClose}>
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
              <img alt="Remy Sharp" src={iron[0].frontImage} className={classe.adminDoor}/>
              <input type="file"/>
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
              <input type="text"/>
            </td>
            <td>
              <Button variant="contained" color="secondary">
                Добавить
              </Button>
            </td>
          </tr>
          {
            iron[0].otherColor.map((res, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img alt="Remy Sharp" src={res.image} className={classe.adminBackDoor}/>
                    <input type="file"/>
                  </td>
                  <td>
                    <input type="text" defaultValue={res.price}/>
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
              <input type="text" defaultValue={iron[0].manufacturer} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].title} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].doorBlockSize} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].series} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].metalSheetThickness} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].thickness} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].strengthClass} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].performanceValue} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].burglarResistanceClass} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].numberOfLoops} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].antiSeize} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].clipAdjustment} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].box} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].platbandDepartureFromTheBox} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].mount} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].insulation} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].castleStrengthening} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].nightValve} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].thermalBreak} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].zinkogrunt} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].doorWeight} style={{width: "90%"}}/>
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
              <input type="text" defaultValue={iron[0].price} style={{width: "90%"}}/>
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
          {
            iron[0].moreImage.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img alt="Remy Sharp" src={item} className={classe.adminDoor}/>
                    <input type="file"/>
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
      </Dialog>
    </>
  );
}
