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

const OnePost = (match) => {
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});
    const itemId = match.match.params.id;

    const fetchItem = async () =>{
        const fetchItem = await fetch(`https://best-animal-shelter.herokuapp.com/api/posts/${itemId}`)
        const item = await fetchItem.json();
        setItem(item.postForm)
        console.log(item.postForm)
    }
    return (
    <>
        <h1>To są dane z bazy -  {item.content}</h1>
    </>
    )
}
export default OnePost;