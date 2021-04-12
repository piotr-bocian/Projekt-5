import React, { useState } from "react";

  const ImageUpload = (props) => {
  const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    //   let picture;
      const files = e.target.files;
      props.onUpload(files[0]);
      console.log(files[0])
    //   const f = files[0];
    //   const reader = new FileReader();
    //   reader.onload = (function (file) {
    //     picture = file.target.result;
    //         setPicture(picture);
    //         props.onUpload(picture);
    //         console.log('picture: ', picture);
    //   })
    //   reader.readAsDataURL(f)            
  };

  return (
    <div className="register_wrapper">
      <div className="register_player_column_layout_one">
        <div className="register_player_Twocolumn_layout_two">
          <form className="myForm">
            <div className="formInstructionsDiv formElement">
              <div className="register_profile_image">
                 <input id="profilePic" type="file" onChange={onChangePicture}/>
              </div>
              <div className="previewProfilePic" >
                <img className="playerProfilePic_home_tile" src="" alt='zdjęcie zwierzaka'></img>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;