import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Color = ({colors}) => {
    const params = useParams()
    const colorData = colors.find(color=> color.name === params.color);
    const {color} = colorData;

    useEffect(() => {
        document.body.style.backgroundColor = color;
        return () => {
        document.body.style.backgroundColor = '';
        };
        }, []);
    
    return(
            <div className='Color-Container'  >
                <div>
                <p> The color {params.color} is amazing</p>
                </div>
                <Link to='/colors'>Go Back!</Link>
            </div>
       
    )
}

export default Color