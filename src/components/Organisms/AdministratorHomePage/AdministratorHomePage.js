import { Grid } from '@material-ui/core';
import { React, useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import AddAnimalForm from '../AddAnimal/AddAnimalForm';
import Fade from '@material-ui/core/Fade';
import PostForm from '../../Organisms/Posts/postForm';
import SignUpForm from '../SignUpInForms/SignUpForm';
import AddEmployeeForm from '../SignUpInForms/AddEmployeeForm';

const AdministratorSectionTitles = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  color: black;
  text-align: left;
  margin-left: 40px;
  margin-top: 30px;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white',
    height: '10vh',
    width: '15vw',
    fontSize: '1.5em',
    fontFamily: 'Montserrat, sans-serif',
    padding: '10px',
    border: '1px solid #0292C9',
    letterSpacing: '0.1em',
    boxShadow: '0px 4px 4px #0292C9',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const AdministratorHomePage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [postModal, setPostModa] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleOpenPost = () => {
    setPostModa(true);
  };

  const handleClosePost = () => {
    setPostModa(false);
  };
  const handleOpenAdminModal = () => {
    setAdmin(true);
  };

  const handleCloseAdminModal = () => {
    setAdmin(false);
  };

  return (
    <div>
      <>
        <Grid
          style={{ marginTop: '50px' }}
          container
          direction="row"
          spacing={3}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <AdministratorSectionTitles>
              <button
                type="button"
                onClick={handleOpen}
                className={classes.button}
              >
                Dodaj zwierzaka
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <AddAnimalForm></AddAnimalForm>
                </Fade>
              </Modal>
            </AdministratorSectionTitles>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <button type="button" onClick={handleOpenPost} className={classes.button}>
              <Grid 
              justify="space-around"
              alignItems="baseline">
                Dodaj Nowy Post <PostForm />
              </Grid>
            </button>
            <AdministratorSectionTitles>

            </AdministratorSectionTitles>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            spacing={3}
            justify="space-around"
            alignItems="baseline"
          >
            <AdministratorSectionTitles>
              <button
                type="button"
                onClick={handleOpenAdminModal}
                className={classes.button}
              >
                Dodaj Pracownika
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={admin}
                onClose={handleCloseAdminModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <AddEmployeeForm />
                </Fade>
              </Modal>
            </AdministratorSectionTitles>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default AdministratorHomePage;
