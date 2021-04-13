import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserAvatar from '../../../assets/pies.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '25vh',
        display: 'flex',
        width: '25vh',
        margin: 'auto'
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
  }));

function UserPageImage({ props }) {
    const classes = useStyles();

    function UserImage(p){
        console.log(p.isImage)
        if(p.isImage && p.isImage.data.length !== 0){
          return <img src={`data:image/jpeg;base64,${Buffer.from(props.user.image.data).toString('base64')}`} alt="avatar" className={classes.image}/>
        }
        return <img src={UserAvatar} alt="avatar" className={classes.image}/>;
    }
   
    return (
      <div className={classes.root}>
        <UserImage isImage={props.image} className={classes.image}/>
      </div>
    );
  }

export default UserPageImage;