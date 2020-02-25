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

export default function MediaCard() {
  const [ironDoor, setIronDoors] = useState({})
  const [interiorDoor, setInteriorDoors] = useState({})
  const classes = useStyles();

  let iron = doors.filter(item => {
    if (item.category === "iron") {
      return item
    }
  })

  let interior = doors.filter(item => {
    if (item.category === "interior") {
      return item
    }
  });
  useEffect(() => {
    setIronDoors(iron);
    setInteriorDoors(interior);
  }, []);
  return (
    <>
      {!ironDoor.length ? <h2>Loading...</h2> : (
        ironDoor.reverse().map((res, index) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={index}>
              <Card className={classes.root}>
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
    </>
  );
}