import React, { useState } from 'react';
import { Typography, TextField, Button, Dialog } from '@material-ui/core';
import { AnimaShelterLogo } from '../../Atoms/Logo/AnimalShelterLogo';
import { Grid } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import './Contact.css';

const Concat = () => {
    return (
    <div>
        <Grid container style={{padding:50}}>
            <Grid item xs={12} sm={12} md={12} style={{padding:10}}>
                <Typography variant="h2" align="center" color="textPrimary">
                    NAPISZ DO NAS
                </Typography>
            </Grid>
        </Grid>
        <Grid container style={{padding:15}} xs={12}>
            <Grid item xs={12} sm={12} md={6} style={{textAlign:"center"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40035.80416884232!2d16.98449301792752!3d51.15940593716131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc999b67e10768ea!2sTOZ%20Schronisko%20dla%20Bezdomnych%20Zwierz%C4%85t%20we%20Wroc%C5%82awiu!5e0!3m2!1spl!2spl!4v1618421213166!5m2!1spl!2spl" width="600" height="600"></iframe>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Grid item xs={12} sm={12} md={12} align="center">
                    <AnimaShelterLogo className="main-logo" />
                </Grid>
                <Typography variant="h3" align="center" color="secondary">
                    furry.tales.shelter

                    <Grid container xs={12} sm={12} md={12} style={{ paddingTop: 50}}>
                        <Grid item xs={3} sm={3} md={3} className="iconsCenter">
                            <LocalPostOfficeIcon color="Secondary" style={{ fontSize: 50 }} />
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} className="stringCenter">
                            <Typography variant="h5" align="left" color="textPrimary">
                                furry.tales.shelter@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} md={12}>
                        <Grid item xs={3} sm={3} md={3} className="iconsCenter">
                            <PhoneIcon color="Secondary" style={{ fontSize: 50 }} />
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} className="stringCenter">
                            <Typography variant="h5" align="left" color="textPrimary">
                                255-255-255
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} md={12}>
                        <Grid item xs={3} sm={3} md={3} className="iconsCenter">
                            <HomeIcon color="Secondary" style={{ fontSize: 50 }} />
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} className="stringCenter">
                            <Typography variant="h5" align="left" color="textPrimary">
                                Backendowa Street 01 10-255 Frontendowo
                            </Typography>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </Grid>

    </div>
    )
}
export default Concat;