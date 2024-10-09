

/*
function Button(){

    //const handleClick = () => console.log("ouch!");

    //const handleClick2 = (name) => console.log(`${name}HIIIIIII@!@!! STOP !`);

//<button onClick = {() => handleClick2("Nafees")}>Click me 2 </button>



    let count = 0;


    const handleClick = (name) => {
        if(count< 3){
            count++;
            console.log(`${name}, You clicked me ${count} times`)
        }
        else{
            console.log(`${name}, stop clicking me!`)
        }
    };
 

    return(
        <>
        
            <button onClick = {() => handleClick("Nafees")}>Click me</button>
            
            
        </>
        
    );
}

export default Button

*/
/*
/////////////////////////////////////////////////////



function Button(){

    const handleEvent = (event) => {event.target.textContent = "Ouch!!"};
 

    return(
        <>
        
            <button onDoubleClick = {(event) => handleEvent(event)}>Click me</button>
            
            
        </>
        
    );
}

export default Button


////////////////////////////////////////////////////////////////////////////
*/




function Button(){

    const handleEvent = (event) => {event.target.textContent = "Ouch!!"};
 

    return(
        <>
        
            <button onDoubleClick = {(event) => handleEvent(event)}>Click me</button>
            
            
        </>
        
    );
}

export default Button