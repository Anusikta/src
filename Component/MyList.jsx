import React from "react";
import PeopleName from "./PeopleName";

function MyList() {
    const peopleDetail = [
            {"id": 1, "name": "Anu", "age": 25},
            {"id": 2, "name": "Madhu", "age": 30},
            {"id": 3, "name": "Mona", "age": 22},
            {"id": 4, "name": "Pari", "age": 28},
            
    ]

    const elder = peopleDetail.filter((people => people.age > 25));
    
    return (
        <ul>
            {elder.map((people) => <PeopleName key={people.id} people = {people}/>)}
        </ul>
    )
}

export default MyList;
