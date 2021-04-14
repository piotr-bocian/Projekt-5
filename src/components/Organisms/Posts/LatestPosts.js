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

import './newPosts.css';

const useStyles = makeStyles({
    media: {
      height: 240,
      padding: 15,
    },
  });

const LatestPosts = () => {
    const [posts, setPosts] = useState([]);
    const classes = useStyles();

    const handler = useHttp(
        `https://best-animal-shelter.herokuapp.com/api/posts`,
        httpMethods.GET
    );

    useEffect(() => {
        handler.makeHttpRequest()
        .then((result) => {
            setPosts(result.posts.results.reverse())
            });
    }, [])

    return (
    <>
        <Typography gutterBottom variant="h2" align="center" color="textPrimary" style={{ marginTop: 85 }}>
            Aktualności
        </Typography>
        <Container>
            <Grid container spacing={3} style={{padding:50}}>
                {posts
                .filter((post, index) => (index < 3))
                .map((post) => (
                    <AllPostsGrid post={post} key={post.id}/>
                ))}
            </Grid>
        </Container>
    </>
    )
}
export default LatestPosts;