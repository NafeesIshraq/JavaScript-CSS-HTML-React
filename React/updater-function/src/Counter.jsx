import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment =() => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }


    return(
        <div className = "count-container"> 
            <p className = "count-display">{count}</p>
            <button className = "counter-button" id = "decrement-js" onClick = {decrement}> Decrement</button>
            <button className = "counter-button" id = "reset-js" onClick = {reset}> Reset</button>
            <button className = "counter-button" id = "increment-js" onClick = {increment}> Increment</button>
        </div>    
    );
}


export default Counter