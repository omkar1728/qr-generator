import React, { useState } from 'react';

const TextInput = () => {
    // Declare a state variable called "inputValue" and a setter function called "setInputValue"
    const [inputValue, setInputValue] = useState('');

    const handleChange = event => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };


    return (

        <div className="justify-center flex flex-col text-white bg-black">
            <h1 className="font-mono p-2" >
                Enter your content here
            </h1>
            <input
                className="border-spacing-1 border-2 border-black"
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={buttonHandler} ></button>
        </div>

    );
};

export default TextInput;
