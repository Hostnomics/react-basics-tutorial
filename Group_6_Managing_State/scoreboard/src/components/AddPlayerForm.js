// import React from 'react';  //rewrite to include {useState} (5:34): https://teamtreehouse.com/library/react-components-2/controlled-components
import React, { useState } from 'react';

const AddPlayerForm = (props) => {

//Create a component state (5:17): https://teamtreehouse.com/library/react-components-2/controlled-components 
    // const [] = useState();
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent browser default sending POST request to server (reload / lose app state) (2:13)
        props.addPlayer(value);
        setValue(""); //reset input field to blank after submit (8:34): https://teamtreehouse.com/library/react-components-2/adding-items-to-state
    }

    return(
        <form onSubmit = {(event) => handleSubmit(event)}>
         { console.log(value) }
            <input        
                type = "text" 
                value = { value }
                placeholder = "Enter A Player's Name Here"
                onChange = {(event) => setValue(event.target.value)}                
            />

            {/* JSX (insdie return) requries self closing input tag </input> (2:02): https://teamtreehouse.com/library/react-components-2/controlled-components */}
        
            <input 
                type="submit"
                value="Add Player"
             />
        </form>

    ); 

}

export default AddPlayerForm; 