import React from "react";
import { useParams } from "react-router-dom";
import data from "./db.json"
import "./Dog.css"
const Dog = () =>{
    const params = useParams()
    const dogName = params.id 

    const dog = data.dogs.find(obj => obj['name'] === dogName )

    console.log(dog.facts)

    return (
        <>
        <div>
            <h1>{params.id}</h1>
            <h2>Age: {dog.age}</h2>
            <h3>Facts about this dog:</h3>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div> 
        </>
    )
}

export default Dog