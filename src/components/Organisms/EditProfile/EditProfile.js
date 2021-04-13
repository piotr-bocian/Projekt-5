import React, { useState } from 'react';
import useHttp from '../../../hooks/useHttp/useHttp';

const EditProfile = () => {

    const [image, setImage] = useState();

    const onChangePicture = e => {
        console.log(e)
        const files = e.target.files;
        setImage(files[0]); 
    };

    const handler = useHttp(
        'https://best-animal-shelter.herokuapp.com/api/users/me',
        'PATCH',
        {
            propName: 'image',
            newValue: image
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        handler.makeHttpRequest();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={onChangePicture}/>
            <button type="submit">Wyślij</button>
        </form>
    )
}

export default EditProfile;