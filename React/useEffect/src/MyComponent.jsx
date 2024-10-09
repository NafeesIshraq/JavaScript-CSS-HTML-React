import React,{useState} from "react";
import { useEffect } from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(()=>{
        document.title =  `count: ${count}`
    }, [count , color]);

    function addCount(){
        setCount(c=> c+1);
    }

    function subtractCount(){
        setCount(c=> c-1);
    }

    function changeColor(){
        setColor(c=> c === 'green' ? 'red' : 'green');
    }

    return(
        <div>
            <p style ={{color: color}} >count : {count}</p>
            <button onClick ={addCount}>ADD</button>
            <button onClick = {subtractCount}>Subtract</button>
            <br></br>

            <button onClick = {changeColor}>change color</button>
        </div>
    );
}

export default MyComponent;