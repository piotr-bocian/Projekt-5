import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Dialog, Container, Card, CardMedia, CardActions, CardContent  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocalPostOfficeIcon  from '@material-ui/icons/LocalPostOffice';
import Grid from '@material-ui/core/Grid';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import useHttp from '../../../hooks/useHttp/useHttp';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    media: {
      height: 240,
      padding: 15,
    },
  });
export function AllPostsGrid (props) {

    const classes = useStyles();
    console.log(props)
      return (
        <>
            <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>
                <Card className="postCard">
                    <CardMedia className={classes.media} image={props.post.photo} title="Dog Reptile" />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.post.postDate}
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.post.title}
                        </Typography>
                    </CardContent>
                    <CardActions className="cardActions">
                        <Button size="small" color="primary" >
                            <Link to={`/news/${props.post._id}`}>Czytaj więcej</Link>
                        </Button>
                    </CardActions>
                </Card>
            </Paper>
            </Grid>
        </>
    );
};