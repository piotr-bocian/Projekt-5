import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Dialog, Container, Card, CardMedia, CardActions, CardContent  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocalPostOfficeIcon  from '@material-ui/icons/LocalPostOffice';
import Grid from '@material-ui/core/Grid';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import useHttp from '../../../hooks/useHttp/useHttp';
import Paper from '@material-ui/core/Paper';
import { AllPostsGrid } from '../../Molecules/Posts/allPostsGrid.js';
import { shortDate } from '../Posts/shortPostDate';

import './newPosts.css';

const useStyles = makeStyles({
    media: {
      height: 450,
      padding: 15,
    },
  });

const OnePost = (match) => {
    const classes = useStyles();

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});
    const itemId = match.match.params.id;

    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://best-animal-shelter.herokuapp.com/api/posts/${itemId}`)
        const item = await fetchItem.json();
        setItem(item.post)
    }
    return (
    <>
    <Container style={{ marginTop: 5 }}>
        <CardMedia className={classes.media} image={item.photo} title="Dog Reptile" />
            <Typography variant="body2" color="textSecondary" component="p">
                {shortDate(item.postDate)}
            </Typography>
            <Typography gutterBottom variant="h2" component="h2">
                {item.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
                {item.content}
            </Typography>
        </Container>
    </>
    )
}
export default OnePost;