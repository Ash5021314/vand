import React, {useState} from 'react'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Doors from './Doors'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import Table from 'react-bootstrap/Table'
import {Form} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'
import {Init} from '../store/actions/auhtAction'
import Notification from './Notification'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {createDoor} from '../store/actions/doorsAction'
import doors from '../doors'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    width: '100%',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  addButton: {
    float: 'right',
    marginBottom: '20px',
  },
}))
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
  titleP: {
    fontWeight: 'bold',
  },
}))
const useStyless = makeStyles(theme => ({
  root: {
    height: 180,
  },

  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}))

function Dashboard(props) {
  const [doorType, setDoorType] = React.useState('iron')
  // one of doors, orders, slider
  const [activeMenu, setActiveMenu] = React.useState('doors')
  const classes = useStyles()
  const classe = useStyle()
  const [open, setOpen] = React.useState(true)
  const [openInsert, setOpenInsert] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [value, setValue] = useState({})
  const [checked, setChecked] = useState(false)

  const menus = {
    doors: <Doors selectedDoors={doors.filter(({category}) => category === doorType)}/>,
    orders: <div>Orders</div>,
    slider: <div>Slider</div>,
  }
  // useEffect(() => {
  //   props.Init();
  //   // console.log(props.auth);
  // }, []);
  // useEffect(() => {
  //   setIsAuthenticated(props.auth.isAuthenticated);
  // }, [props.auth.isAuthenticated]);
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleClose = async () => {
    let img = new FormData()
    img.append('img', value.img)
    delete value.img
    let resp = await props.createDoor(img, value)
    if (resp.success) {
      setOpenInsert(false)
    }
  }

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  // const changeDoorToIron = () => {
  //   setDoorType('iron');
  // };
  // const changeDoorToInterior = () => {
  //   setDoorType('interior');
  // };

  // console.log(isAuthenticated);
  // const classess = useStyless();
  const onchange = (event) => {
    setValue({
      ...value,
      [event.target.name]:
      event.target.value,
    })
  }
  const handleChange = () => {
    setChecked(prev => !prev)
  }
  const onImagePick = e => {
    setValue({
      ...value,
      img: e.target.files[0],
    })
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  console.log('checked', checked)
  const notificationStyle = {
    display: checked ? 'block' : 'none',
  }
  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                ПАНЕЛЬ АДМИНИСТРАТОРА
              </Typography>


              <FormControlLabel
                control={
                  <IconButton color="inherit" onClick={handleChange}>
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon/>
                    </Badge>
                  </IconButton>
                }
              />

              {/*<div className={classes.container}>*/}
              {/*  <Fade in={checked}>*/}
              {/*    <Paper elevation={4} className={classes.paper}>*/}
              {/*      <svg className={classes.svg}>*/}
              {/*        <polygon points="0,100 50,00, 100,100" className={classes.polygon}/>*/}
              {/*      </svg>*/}
              {/*    </Paper>*/}
              {/*  </Fade>*/}
              {/*</div>*/}

              <div style={notificationStyle}>
                <Notification/>
              </div>
            </>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <Divider/>
          <List>
            <div>
              <ListItem button onClick={() => {
                setDoorType('iron')
                setActiveMenu('doors')
              }}>
                <ListItemText primary="Входная дверь"/>
              </ListItem>
              <ListItem button onClick={() => {
                setDoorType('interior')
                setActiveMenu('doors')
              }}>
                <ListItemText primary="Межкомнатная дверь"/>
              </ListItem>
              <ListItem button onClick={() => {
                setActiveMenu('orders')
              }}>
                <ListItemText primary="Заказы"/>
              </ListItem>
              <ListItem button onClick={() => {
                setActiveMenu('slider')
              }}>
                <ListItemText primary="Slider"/>
              </ListItem>
            </div>
          </List>
          <Divider/>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container maxWidth="lg" className={classes.container}>
            <Button
              onClick={() => setOpenInsert(true)}
              variant="contained"
              color="primary"
              className={classes.addButton}
            >
              Добавить
            </Button>

            <Grid container spacing={3}>
              {menus[activeMenu]}
            </Grid>
            <Box pt={4}/>
          </Container>
        </main>
      </div>
      <Dialog fullScreen open={openInsert} onClose={handleClose}>
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
          <tbody>
          <tr>
            <td>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className={classe.titleP}>Категория</Form.Label>
                <Form.Control as="select" name="category" onChange={onchange}>
                  <option name="iron">Входная</option>
                  <option name="interior">Межкомнатная</option>
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <p className={classe.titleP}>Загрузить переднее фото</p>
              <input type="file" name="upFile" onChange={onImagePick}/>
            </td>
            <td>
              <p className={classe.titleP}>Цвет передней двери</p>
              <input type="text" name="colorfrontDoor" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Сторона двери</p>
              <input type="text" name="sideDoor" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Зарисовка двери</p>
              <input type="text" name="picDoor" onChange={onchange}/>
            </td>
          </tr>
          <tr>
            <td>
              <p className={classe.titleP}>Производитель</p>
              <input type="text" name="manufacture" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Имя</p>
              <input type="text" name="doorName" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Размер дверного блока</p>
              <input type="text" name="blockSize" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Серия</p>
              <input type="text" name="seria" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Толщина полотна (мм)</p>
              <input type="text" name="tolPol" onChange={onchange}/>
            </td>
          </tr>
          <tr>
            <td>
              <p className={classe.titleP}>Толщина листа металла (мм.)</p>
              <input type="text" name="tolList" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Класс прочности</p>
              <input type="text" name="classStrong" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>
                Значение по эксплутационным характеристикам
              </p>
              <input type="text" name="valEks" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Класс устойчивости к взлому</p>
              <input type="text" name="classProchnost" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Количество петель</p>
              <input type="text" name="petli" onChange={onchange}/>
            </td>
          </tr>
          <tr>
            <td>
              <p className={classe.titleP}>Противосъемы</p>
              <input type="text" name="protivosyom" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Регулировка прижима</p>
              <input type="text" name="regulirovka" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Коробка</p>
              <input type="text" name="box" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Вылет наличника от короба</p>
              <input type="text" name="vilet" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Крепление</p>
              <input type="text" name="kreplenie" onChange={onchange}/>
            </td>
          </tr>
          <tr>
            <td>
              <p className={classe.titleP}>Утеплитель</p>
              <input type="text" name="utiplitel" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Усиление замковой зоны</p>
              <input type="text" name="usilenieWinter" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Ночная задвижка</p>
              <input type="text" name="nightMove" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Терморазрыв</p>
              <input type="text" name="termorazriv" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Цинкогрунт</p>
              <input type="text" name="cinkogrunt" onChange={onchange}/>
            </td>
          </tr>
          <tr>
            <td>
              <p className={classe.titleP}>Вес двери</p>
              <input type="text" name="doorHeight" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Цена</p>
              <input type="text" name="price" onChange={onchange}/>
            </td>
            <td>
              <p className={classe.titleP}>Полная Цена</p>
              <input type="text" name="fullPrice" onChange={onchange}/>
            </td>
          </tr>
          </tbody>
        </Table>
      </Dialog>
    </>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {Init, createDoor})(Dashboard)
