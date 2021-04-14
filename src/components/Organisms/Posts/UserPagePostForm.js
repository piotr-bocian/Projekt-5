import React, { useState } from 'react';
import { Typography, TextField, Button, Dialog  } from '@material-ui/core';
import ControlPoint  from '@material-ui/icons/ControlPoint';
import { Grid } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

import { NavWrapper, PageWrapper, BodyWrapper } from '../../Organisms/AdoptionVisit/UserPageVisitForm.style';
import { PostWrapper } from '../../Organisms/AdoptionVisit/AdoptionVisitForm.style';
import BackButton from '../../Atoms/UserNavigationPage/BackButton';

const PostForm = () => {
    const setupJson = ()=>{
        let jsonToSend = {}
        jsonToSend = {
            title: title,
            postDate: new Date(),
            content: content,
            photo: photo
        }
        setPost(jsonToSend)
    }
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [sendInfo, setSendInfo] = useState(false);
    const [errors, setErrors] = useState({});
    const [post, setPost] = useState({
        title:'',
        postDate:'',
        content:'',
        photo:''
    });
    const validate = () => {
        console.log(post)
        let temp = {}
            temp.title = title?"":"This field is required"
            temp.photo = photo?"":"This field is required"
            temp.content = content?"":"This field is required"
            if(content.length < 50){
                temp.content = "This field is required"
            }
            setErrors({
                ...temp
            })
        return Object.values(temp).every(x => x =='')
    }
    const handeSubmit = (e) => {
        const authToken = window.localStorage.getItem('x-auth-token');
        setPost({
            title: title,
            postDate: new Date(),
            content: content,
            photo: photo
        })
        e.preventDefault();
         if(validate()){
             if(content.length > 50){
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': authToken,
                    },
                    body: JSON.stringify(post)
                };
                fetch('https://best-animal-shelter.herokuapp.com/api/posts', requestOptions)
                .then(response => {
                    if(response.status == 200 || 201){
                        handleSendInfo()
                        console.log(response.status)
                    }
                }).catch(error =>{
                    console.log(error)
                })
                setTitle('')
                setPhoto('')
                setContent('')
             }
         }
         else{
             console.log('error nie wszystko uzupełnione')
         }
    }

    const handleSendInfo = () =>{
        setSendInfo(true);
    };
    const handleClose = () => {
        setSendInfo(false);
    };

    return (
    <>
        <PageWrapper>
            <NavWrapper >
                <div><BackButton link={{link:"/useraccount"}}/></div>
                <h2> Dodaj post do aktualności </h2>
            </NavWrapper>
            <BodyWrapper>
                <PostWrapper>
                    <form className="formAdoption" onSubmit={handeSubmit} noValidate
                        autoComplete="off">
                        <Grid container spacing={3} justify="center">
                            <ControlPoint color="primary" style={{ fontSize: 50 }}/>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    color="textPrimary"
                                >
                                Dodaj nowy post
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    error={errors.title}
                                    variant="outlined"
                                    label="Tytuł *" value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    fullWidth
                                    helperText="Tytuł wymagany"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.content}
                                    variant="outlined"
                                    label="Treść *"
                                    multiline
                                    rows={6}
                                    value={content} onChange={(e) => setContent(e.target.value)}
                                    fullWidth
                                    helperText="Tytuł wymagany - min 50 znaków"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    error={errors.photo}
                                    variant="outlined"
                                    label="Link do fotografii*"
                                    value={photo} onChange={(e) => setPhoto(e.target.value)}
                                    fullWidth
                                    helperText="Dodaj zdjęcie zwierzaka"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    onClick={setupJson}
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                >
                                Wyślij
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </PostWrapper>
            </BodyWrapper>
        </PageWrapper>
        <Dialog open={sendInfo} onClose={handleClose} aria-labelledby="form-dialog-title">
            <div style={{ padding: 60 }}>
                <Grid container justify="center" className="formAdoption">
                    <Grid item xs={2} sm={2} md={2} jusify="center" style={{ textAlign: "center" }}>
                            <TelegramIcon color="Secondary" style={{ fontSize: 50 }}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} style={{ padding: 20 }}>
                        <Typography
                                variant="h4"
                                align="center"
                                color="green"
                        >
                            Wpis został wysłany do zatwierdzenia
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} jusify="center" style={{ textAlign: "center" }}>
                        <Button variant="outlined" color="primary" onClick={handleClose}>OK</Button>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    </>
    )
}
export default PostForm;