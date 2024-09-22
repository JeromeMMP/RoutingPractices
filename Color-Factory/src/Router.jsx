import React from "react"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
import ColorFactory from "./ColorFactory"
import Color from "./Color"

function Router() {
  const [colors, setColors] = useState([
    {name: "red", color:"#ff0000" },
    {name: "green", color: "#008000"},
    {name:"blue", color:"#0000ff"}  ])

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/colors'>
              <Route index element={<Home colors={colors} setColors={setColors}/>}/> 
              <Route path="new" element={<ColorFactory colors={colors} setColors={setColors}/>}/>
              <Route path=":color" element={<Color colors={colors}/>}/>
            </Route>             
            <Route path='*' element={<Navigate to='/colors'/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default Router