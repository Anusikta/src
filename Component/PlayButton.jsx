import React from "react";
import Button from "./Button";

function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
    
    // function Button({onClick, children}) {
    //     return (
    //         <button onClick={onClick}>
    //             {children}
    //         </button>
    //     )
    
    // }

    return (
      <Button onPlay={handlePlayClick}>Play "{movieName}"</Button>
    );
  }

export default PlayButton;