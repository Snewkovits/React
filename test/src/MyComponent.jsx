import React, {useState, useEffect, useRef} from 'react';

function MyComponent() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button><br/>
            <input ref={inputRef}/>
        </div>
    )
}

export default MyComponent;