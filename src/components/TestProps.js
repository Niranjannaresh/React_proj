import { useState, useEffect } from "react"
import React from 'react'

export default function TestProps(props) {
    const [text, setTest]= useState("enter text here");
    const UpText=()=>{
        let newText= text.toString.toUpperCase();
        console.log(newText);
        
    }
    
    const handleOnChange=(event)=>{
        setTest(event.target.value);
    }
    useEffect(()=>{
        setTest(text.toUpperCase());
    },
    [setTest]);

    

    return (
        < >
            <div classNameName="container">
                        
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="mbox" rows="5" />
                
                <p >
                {props.title}-{text}
                {props.text}
                </p>

                <button className="btn btn-primary" onClick={UpText}>Conver to upper </button>

               {/* TestProps.defaultProps = {
                   title : "Enter what to do ",

               } */}

            </div>

        </>
    )
}
