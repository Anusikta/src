import React from "react";

function PeopleName({ people }) {
    const myListStyle = {
        color : 'green',
        font : '10px'

    }
    // if (people.age > 25) {
    //     return <li>{people.name} is eligible </li>
    // } else {
    //     return <li>{people.name} is not eligible</li>
    // }
    return (
        // <li>
        //     {people.age > 25 ? people.name + " is eligible" : <del>{people.name + " is not eligible"}</del>}
        // </li>
        // <li>{people.name} is {people.age < 25 && 'not'} eligible</li>
        <li style={myListStyle}>{people.name} is eligible</li>
    );
}

export default PeopleName;
