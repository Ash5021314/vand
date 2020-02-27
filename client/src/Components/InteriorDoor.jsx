import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import doors from "../doors";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  mediaFront: {
    height: 240,
    width: '49%',
    float: 'left'
  },
  mediaBack: {
    height: 240,
    width: '49%',
    float: 'right'
  },
});
const useStyle = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
export default function IronDoors() {
  const [interior, setInteriorDoors] = useState({})
  const classes = useStyles();
  const classe = useStyle();
  const [openInterior, setOpenInterior] = useState(false);

  const handleClickOpen = () => {
    setOpenInterior(true);
  };

  const handleClose = () => {
    setOpenInterior(false);
  };


  let iron = doors.filter(item => {
    if (item.category === "interior") {
      return item
    }

  });
  useEffect(() => {
    setInteriorDoors(iron);
  }, []);
  return (
    <>
      {!interior.length ? <h2>Loading...</h2> : (
        interior.reverse().map((res, index) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={index}>
              <Card className={classes.root} onClick={handleClickOpen}>
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
                  <Typography component="p">
                    {res.price} руб
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      )}
      <Dialog fullScreen open={openInterior} onClose={handleClose}>
        <AppBar className={classe.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classe.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}