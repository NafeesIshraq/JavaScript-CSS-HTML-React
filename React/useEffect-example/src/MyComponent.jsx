import React,{useState} from "react";
import { useEffect } from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        console.log("event listennask added")
        return ()=> {
            window.removeEventListener('resize', handleResize);
            console.log("event listennask removed")
        }
    },[]);
    useEffect(()=>{
        document.title = `size: ${height} x ${width}`;
    }, [height, width])
    
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   


    return(
        <>
            <p>Window Width: {width} px</p>
            <p>Window Height: {height} px</p>

        </>
    );
       
}

export default MyComponent;