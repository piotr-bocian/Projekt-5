import React from "react";
import useStyles from '../../Organisms/AddAnimal/AddAnimalStyles';

  const ImageUpload = (props) => {
    const classes = useStyles();

  const onChangePicture = e => {
    //   let picture;
      const files = e.target.files;
      props.onUpload(files[0]);
      console.log(files[0])         
  };

  return (
    <div>
      <form>
        <div>
          <input className={classes.profilePic} type="file" onChange={onChangePicture}/>
        </div>
        <div className={classes.previewProfilePic}>
          <img className="playerProfilePic_home_tile" src="" alt='zdjęcie zwierzaka'></img>
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;