import React from "react";
import Button from "./Button";

export default function UploadButton(){

    // function Button({children}) {
    //     return (
    //         <button>{children}</button>
    //     )
    
    // }

    return (
        <Button onPlay={() => alert('Uploading!')}>Upload Image</Button>
    );
}