import React, {useEffect, useState} from "react";
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
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from '@material-ui/icons/Close';
import List from "@material-ui/core/List";

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
  title: {
    marginLeft: theme.spacing(2),
  },
  adminDoor: {
    float: 'left',
    height: '200px',
    marginLeft: '20px'
  },
  adminBackDoor: {
    float: 'left',
    height: '70px',
    marginLeft: '20px'
  },
  flex: {
    display: 'flex'
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'column'
  },
  flexDirectionEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-End'
  }
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
export default function IronDoors() {
  const [ironDoor, setIronDoors] = useState({});
  const classes = useStyles();
  const classe = useStyle();
  const [openIron, setOpenIron] = useState(false);

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
  let x = iron.map(res => {
    return res
  })

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
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classe.title}>
              {x[0].title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <ListItem alignItems="flex-start">
          <List className={classe.flex}>
            <ListItem className={classe.flexDirection}>
              <img alt="Remy Sharp" src={x[0].frontImage} className={classe.adminDoor}/>
              <input type="file"/>
            </ListItem>
            <ListItem className={classe.flexDirection}>
              <img alt="Remy Sharp" src={x[0].backImage} className={classe.adminDoor}/>
              <input type="file"/>
            </ListItem>
          </List>
          <List>
            <ListItem className={classe.flexDirectionEnd}>
              <img alt="Remy Sharp" src={x[0].backImage} className={classe.adminBackDoor}/>
              <input type="file"/>
            </ListItem>
            <ListItem className={classe.flexDirectionEnd}>
              <img alt="Remy Sharp" src={x[0].backImage} className={classe.adminBackDoor}/>
              <input type="file"/>
            </ListItem>
            <ListItem className={classe.flexDirectionEnd}>
              <img alt="Remy Sharp" src={x[0].backImage} className={classe.adminBackDoor}/>
              <input type="file"/>
            </ListItem>
          </List>
        </ListItem>
      </Dialog>
    </>
  );
}
