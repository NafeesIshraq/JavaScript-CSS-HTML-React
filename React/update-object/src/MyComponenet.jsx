import React,{useState} from "react";

function MyComponent(){
    
    
    const [car, setCar] = useState({year: 2024,
                                    make: 'Toyota', 
                                    model: "camry"
    })

    function handleYearChange(event){
        setCar(c => ({...car, year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}))
    }
    
    
    return(
        <div>
            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>

            <input type = "number" value = {car.year}  placeholder = "input year"  onChange = {handleYearChange}></input>
            <input type = "text"   value = {car.make}  placeholder = "input make"  onChange = {handleMakeChange}></input>
            <input type = "text"   value = {car.model} placeholder = "input model" onChange = {handleModelChange}></input>
        </div>

    );
}

export default MyComponent;