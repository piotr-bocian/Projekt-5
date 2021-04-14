import React from "react";

    const ImageUpload = (props) => {

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
                        <input type="file" onChange={onChangePicture}/>
                    </div>
                </form>
            </div>
        );
    }

export default ImageUpload;