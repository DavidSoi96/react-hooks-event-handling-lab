// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange (event) {
        console.log("Entering Password...")
    }
    return (
        <div>
            <input type="password" onChange ={handleChange} placeholder="Entering Password" />
        </div>
    );
}

export default Keypad;
