import React, {useState} from "react";

function MyComponent(){
 
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(){

        const newCar = {year:year, 
                        make:carMake, 
                        model: carModel};

        setCars(c => [...cars, newCar]);

        setYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !==index));
    }

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }




    return(
        <>
            <div>
                <h2>List Of Car Objects</h2>
                <ul>
                    {cars.map((car,index) => <li key ={index} onClick = {() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
                </ul>

                <input type = "number" value = {year} onChange = {handleYearChange}/><br/>
                <input type = "text" value = {carMake} onChange = {handleMakeChange} placeholder = "Enter Car Make"/><br/>
                <input type = "text" value = {carModel} onChange = {handleModelChange} placeholder = "Enter Car Model"/><br/>
                <button onClick = {handleAddCar}>Add Car</button>
            </div>
        
        
        </>
    
)
}

export default MyComponent;