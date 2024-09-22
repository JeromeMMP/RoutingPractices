import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./Home"
import Dog from "./Dog"


const Router = () => { 
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/dogs">
                    <Route index element={<Home/>}/>
                    <Route path=":id" element={<Dog/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/dogs"/>}/>
            </Routes>


        </BrowserRouter>
    
    )
}

export default Router
