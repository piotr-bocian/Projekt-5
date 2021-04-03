import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    display: 'inline-block',
  },
  listItemText: {
      padding: '0px 10px',
      margin: '2px 8px',
  },
  listItem: {
    padding: '0px 10px',
    marginLeft: '10px',
}
}));

export function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button className={classes.listItem}>
          <ArrowRightAltIcon/>
          <ListItemText className={classes.listItemText} primary="zgłoś zgubę / znajdę" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ArrowRightAltIcon/>
          <ListItemText className={classes.listItemText} primary="poradnik" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ArrowRightAltIcon/>
          <ListItemText className={classes.listItemText} primary="znalezione" />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ArrowRightAltIcon/>
          <ListItemText className={classes.listItemText} primary="zaginione" />
        </ListItem>
      </List>
    </div>
  );
}