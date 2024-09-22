import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import rainbow from "./rainbow-colors-gradient.jpg"
const ColorFactory = ({colors, setColors}) => {
     const [value, setValue] = useState('')
     const [color, setColor] = useState(false)
     const navigate = useNavigate()
     const handleValueChange = (evt) => { 
          setValue(evt.target.value)
     }

     const handleColorChange = (evt) => {
          setColor(evt.target.value)
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          setColors([...colors, {name:value, color}])
          console.log()  
          navigate('/colors');

     }
     
    useEffect(() => {
     document.body.style.backgroundImage = rainbow
     return () => {
     document.body.style.backgroundImage = '';
     };
     }, []);
     
     return (
          <>
               <div className="Color-Factory">   
                    <div className="Form-Card">
                         <form onSubmit={handleSubmit} action="">
                              <label htmlFor="Name of color">Color Name </label>
                              <input onChange={handleValueChange} label="Name of color"type="text" name="colorName" id="" value={value} />
                              <br />
                              <label htmlFor="color"> Color Value </label>
                              <input label="Pick color" type="color" value={color} onChange={handleColorChange} name="color" id="color" />
                              <br />
                              <button type="submit"> add this color </button>
                         </form>
                    </div>
               </div>
          </>
     )
}; 

export default ColorFactory 