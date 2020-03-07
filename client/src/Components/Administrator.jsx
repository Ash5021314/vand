import React, {useState, useEffect} from 'react'
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
import {getHomePage} from '../store/actions/layoutAction'
import doors from '../doors'
import Orders from './Orders'
import AdminSlider from './AdminSlider'
import AboutAdmin from './AboutAdmin'
import AdminBrends from './AdminBrends'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'

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

  const [open, setOpen] = React.useState(true)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checked, setChecked] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const classes = useStyles()

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Добавить дверьи</h4>
          <div>
            <Link to="/createDoor/iron" style={{
              width: '45%',
              margin: '2%',
            }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
                style={{float: 'none'}}
              >
                Входные
              </Button>
            </Link>
            <Link to="/createDoor/interior" style={{
              width: '45%',
              margin: '2%',
            }}>
              <Button
                style={{float: 'none'}}
                variant="contained"
                color="primary"
                className={classes.addButton}
              >
                Межкомнатные
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    )
  }


  const menus = {
    doors: <Doors selectedDoors={doors.filter(({category}) => category === doorType)}/>,
    orders: <Orders/>,
    slider: <AdminSlider/>,
    about: <AboutAdmin/>,
    brends: <AdminBrends/>,
  }
  useEffect(() => {
    //   props.Init();
    props.getHomePage()
    //   // console.log(props.auth);
  }, [])
  // useEffect(() => {
  //   setIsAuthenticated(props.auth.isAuthenticated);
  // }, [props.auth.isAuthenticated]);
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  // console.log(isAuthenticated);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const notificationStyle = {
    display: checked ? 'block' : 'none',
  }

  function handleCloseInsert() {
    setOpen(false)
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
                <ListItemText primary="Слайдер"/>
              </ListItem>
              <ListItem button onClick={() => {
                setActiveMenu('about')
              }}>
                <ListItemText primary="О Нас"/>
              </ListItem>
              <ListItem button onClick={() => {
                setActiveMenu('brends')
              }}>
                <ListItemText primary="Бренды"/>
              </ListItem>
            </div>
          </List>
          <Divider/>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container maxWidth="lg" className={classes.container}>

            {console.log('aaaa', modalShow)}
            <ButtonToolbar>
              <Button
                onClick={() => setModalShow(true)}
                variant="contained"
                color="primary"
                className={classes.addButton}
              >
                Добавить
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>

            <Grid container spacing={3}>
              {menus[activeMenu]}
            </Grid>
            <Box pt={4}/>
          </Container>
        </main>
      </div>


    </>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {Init, createDoor, getHomePage})(Dashboard)
