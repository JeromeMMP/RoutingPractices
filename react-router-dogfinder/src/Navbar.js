import React from "react";
import  {Link} from "react-router-dom"
import data from "./db.json"
const Navbar = () => {
    const dogs = data.dogs.map(dog => dog.name);
    return (
        <nav>
            {dogs.map(name => (<Link to={name}> {name}</Link>))}
        </nav>
    )
}

export default Navbar