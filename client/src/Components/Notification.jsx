import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Message from '../message'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#00A9F7',
    position: 'absolute',
    top: '43px',
    right: '45px',
  },
}))

const Notification = () => {
  const classes = useStyles()
  const [checked, setChecked] = useState('')

  const handleToggle = value => () => {
    setChecked(value)
  }
  return (
    <List className={classes.root}>
      {Message.map((value, index) => {
        return (
          <ListItem className="panel" key={index} dense button>
            <ListItemIcon>
              <Checkbox
                onClick={handleToggle(value)}
              />
            </ListItemIcon>
            <ListItemText primary={` ${value.name} - ${value.phone}`}/>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Notification