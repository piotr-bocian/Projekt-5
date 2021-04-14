import React, { useEffect, useState } from 'react';
import useHttp from '../../../hooks/useHttp/useHttp';
import { useAuth } from '../../../contexts/AuthContext';
import { Input, Button, Grid, TextField } from '@material-ui/core';

import './EditProfile.css';

const EditProfile = () => {
  const [image, setImage] = useState();
  const [mobile, setMobile] = useState('');
  const [mobileErr, setMobileErr] = useState();
  const { authToken } = useAuth();

  const onChangePicture = (e) => {
    const files = e.target.files;
    setImage(files[0]);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();

    if(!image)
      return;

    const formData = new FormData();
    formData.set('image', image, 'image');

    fetch('https://best-animal-shelter.herokuapp.com/api/users/me', {
      method: 'PATCH',
      headers: {
        'x-auth-token': authToken,
      },
      body: formData,
    });
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();

    if (mobile.length !== 9 || isNaN(Number(mobile))) {
      setMobileErr(true);
    } else {
      let num = mobile;
      num = num.slice(0, 3) + '-' + num.slice(3, 6) + '-' + num.slice(6, 9);

      const formData = new FormData();
      formData.append('mobile', num);

      fetch('https://best-animal-shelter.herokuapp.com/api/users/me', {
        method: 'PATCH',
        headers: {
          'x-auth-token': authToken,
        },
        body: formData,
      });

      setMobile('');
    }
  };

  return (
    <div className="container">
      <form class="edit-form" onSubmit={handleImageSubmit}>
        <h3>Zmień zdjęcie profilowe</h3>
        <Input type="file" onChange={onChangePicture} />
        <Button color="primary" variant="contained" type="submit">
          Zmień
        </Button>
      </form>
      <form class="edit-form" onSubmit={handleMobileSubmit}>
        <h3>Zmień numer telefonu</h3>
        <TextField
          value={mobile}
          label={'Nr telefonu'}
          error={mobileErr}
          onChange={(e) => {
            setMobileErr(false);
            setMobile(e.target.value);
          }}
        />
        <Button color="primary" variant="contained" type="submit">
          Zmień
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
