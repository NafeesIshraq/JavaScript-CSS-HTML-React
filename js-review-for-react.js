//arrow function 

function DoSomething(){
    console.log("Hello, World!");
}


//we can use const , let , var  to define a arorow fuction 

const DoSomething = () => {
    console.log("Hello, World!");
} 


// we acan export arrow function deferently 
export default function DoSomething(){}
export function DoSomething(){}

// In react we define components. 

const MyComponent = () => {
    return <div>Hello, World!</div>;
}

// Anonymous function 

// this funciton prints hello world when clicked. the function has bno name, it ttrigers autimatically when clicked. 

<button
onclick={() => {
    console.log("Hello, World!");
}}>

</button>



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//react allows us to write js inside jsx/html


//we need to decrease the amount of codes we are writing

if(true){

}else{

}

//we can write this in one line using ternary operator

let age  = 10
let name = "John"

//instead of writung this 
if(age > 10 ){
    name=  "pedro"
}else {
    name = "John"
}

//DO THIS

let name_2 = age > 10 ? "pedro" : "John";

//in react we might use this like 
const COmponent = () => {
    return age >10 ? <div>Pedro</div> : <div>John</div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OBJECTS 

//destructuring a object 


const person ={
    name: "John",
    age: 10,
    isMarried : false
}


const name= person.name
const age = person.age
const isMarried = perrson.isMarried

// but we acn easily do this instead


const {name, age, isMarried} = person


//if i want to add an existing variable inside an object as a key value pair , i dont have to write it out. just include the variable name
let age_2 = 45

const person_2 = {
    age_2
}


// If we want to copy an object fully except for example one key value pair. we can do it like 

const person_3 = {... person, name : "ANfees"}
 //everything will be copied except for the name which will be jack instead

const names = ["pedro","john"]; 
const names_2 = [...names, "jack"]; //copied the whole names list and then adds jacks at last position \\

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//.map
//.filter
//.reduce
//.foreach


//imagine array names. 
// i want to edit each element of that list
 

//i am grabing each of the elements as arguments
name.map((name) => {
    return name + "1"; //this will add 1 with every element
})



// .filter

//imagine there are some duplicate elements on thge list  that we awant to edit

names.filter(()=>{
    return name !== "john" //this will return all elements except john
})




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Async 
//await
//promise
//then
//catch
//finally
//fetch 
//async await



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM 







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//import 
//export 

//scripts etc wahatever



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TEmplate literals
//template literals are used to create strings with embedded expressions. They are defined with the backtick character

