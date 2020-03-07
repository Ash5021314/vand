import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// import Message from '../message'

import { connect } from "react-redux";
import { markAsSeen, getSeenMessages } from "../store/actions/messageAction";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#00A9F7",
    position: "absolute",
    top: "43px",
    right: "45px"
  }
}));

const Notification = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState("");
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
      props.getSeenMessages();
  },[]);

  useEffect(()=>{
    setMessages(props.messages.seenMessages);
},[props.messages.seenMessages]);

  const handleToggle = id => () => {
    // setChecked(value);
     props.markAsSeen(id);
  };

  return (
    <List className={classes.root}>
      {messages.map((value, index) => {
        return (
          <ListItem className="panel" key={index} dense button>
            <ListItemIcon>
              <Checkbox onClick={handleToggle(value._id)} />
            </ListItemIcon>
            <ListItemText primary={` ${value.name} - ${value.phone}`} />
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps, { getSeenMessages, markAsSeen })(
  Notification
);
