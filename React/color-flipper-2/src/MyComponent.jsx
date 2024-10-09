import React,{useState} from "react";


const MyComponent = () =>{

    const [color, setColor] = useState("Empty Value")
    
   


    return(

        <div className = "color-flipper" >
            <div className = "color-box" style = {{backgroundColor: color}}>
                <h3>{color}</h3>
            </div>
            
        <input
            type = "text"
            placeholder="Add Color Name"  
            onChange = {(event)=>setColor(event.target.value)}
        />
            
            


        </div>
    
    );
}

export default MyComponent