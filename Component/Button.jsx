import React from "react";

function Button({onPlay, children}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onPlay();
          }}>
            {children}
        </button>
    )

}

export default Button;