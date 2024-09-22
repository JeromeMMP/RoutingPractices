import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ColorFactory from "./ColorFactory";

const Home = ({colors, setColors}) => { 
 
  
    return (
        <div>
        <div className="Header">
            <h1>Welcome to the color factory</h1>
            <h2><Link to='/colors/new'>Add a Color</Link></h2>
           
       </div>
       <div>
          <p>Please select a color</p>
          <div>
            <ul style={{listStyleType:"none"}}>
            {colors.map(({name, color}) => (<><li key={color}> <Link key={color} to={`/colors/${name}`}>  {name} </Link> </li> </>))}
            </ul>
          </div>  
         

       </div>
    </div>
    )
}
export default Home 