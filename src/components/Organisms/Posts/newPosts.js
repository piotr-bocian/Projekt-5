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
import PostForm from './postForm';

import './newPosts.css';


  
const useStyles = makeStyles({
    media: {
      height: 240,
      padding: 15,
    },
  });
const NewPosts = () => {
    const [posts, setPosts] = useState([]);
    const classes = useStyles();

    const handler = useHttp(
        `https://best-animal-shelter.herokuapp.com/api/posts`,
        httpMethods.GET
    );

    useEffect(() => {
        handler.makeHttpRequest()
            .then((result) => {
                    result.posts.results.map((post)=>{
                })
                setPosts(result.posts.results.reverse())

            });
    }, [])

    return (
    <>
        <Typography gutterBottom variant="h2" align="center" color="textPrimary" style={{ marginTop: 15 }}>
            Aktualności
        </Typography>
        <Container>
        <PostForm />
            <Grid container spacing={3} justify="center" style={{
                paddingBottom:25
                }}>
                {posts.map((post) => (
                    <AllPostsGrid post={post}/>
                ))}
            </Grid>
        </Container>
    </>
    )
}
export default NewPosts;