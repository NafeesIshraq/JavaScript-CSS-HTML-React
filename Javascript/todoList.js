


//now we also want top add date. that is why we are making this an object. 
//const todoList =[];
// it is good practice to add mock value like this just to see whats  going on in the console.
const todoList = [
    
]

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
    AddTodo();
});





function AddTodo(){
    const toDo = document.querySelector(".js-addTodo");
    let name=toDo.value;   //best practice is to save it in another variable. so that it can be easily used later. 
    //now we have a date function. to add date, we need that value in our java script. 
    const inputDate = document.querySelector('.js-due-date-input');
    let dueDate = inputDate.value;
    
    
    
    todoList.push({
        name: name, 
        dueDate: dueDate//here the name of property and the variable is same . so we can use shorthand operator too. 
        //we can simply right, name, dueDate/ and it will be okay. 
    });
   

    //now notice that make dinner is not going away 
    //remember that the text is tha value we wqant. 
    // so jyust make the value empty. 
    toDo.value = ''; // dont change tha name variable. lol 

    rendertodoList(); // update the HTML  with our new list of todos
}  


//important //generating the HTML 
/*
function rendertodoList(){


    let todoListHTML = '';

    for(let i=0;i<todoList.length;i++){
        const toDo = todoList[i] ;
        //to show it in the webpage, it has to HTML
        //to do this we will create a HTML variable

        const html = `<p>${toDo}</p>`; //inside a paragraph element
        //no i need to add all paragrapgh together. because currently it is only printing one element each
        //so i will create another variable to store total 
        todoListHTML +=html;
    }
    //to display this we need a div container

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}*/

//this is the improved function for above. i added delete buttons and removes element. 

/*
function rendertodoList(){


    let todoListHTML = '';

    for(let i=0;i<todoList.length;i++){
        //todo is now a object . so rename it.
        //const toDo = todoList[i] ; 
        //must add semicolons. or rendertodoList will not work.
        
        const todoListObject = todoList[i];
        //to display it in the HTML, i need the name and date. 
        //so
        const name = todoListObject.name;
        const dueDate = todoListObject.dueDate;

        //there is a small problem. if we use <p>, the elements will come up as an single element. so we will use div.
        const html = ` 
       
        <div>${name}</div>  
        <div>${dueDate}</div>
        <button onclick="todoList.splice(${i},1); rendertodoList();" class = "delete-button">Delete</button> 

        `; 
        todoListHTML +=html;
    }
    

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}
*/
// WE CAN DO THIS WITH  A FOR EACH LOOP AS WELL
//array.foreach((param1,param2) => {---------}   );


function rendertodoList(){


    let todoListHTML = '';

    todoList.forEach((todoListObject,index)=>{
        for(let i=0;i<todoList.length;i++){
           
            const name = todoListObject.name;
            const dueDate = todoListObject.dueDate;
    
           
            const html = ` 
           
            <div>${name}</div>  
            <div>${dueDate}</div>
            <button onclick="todoList.splice(${index},1); rendertodoList();" class = "delete-button js-delete-btn">Delete</button> 
    
            `; 
            todoListHTML +=html;
        }
    });


    document.querySelector('.js-todoList').innerHTML = todoListHTML;   
    
    
    //queryselectorall === will effect everything with that class name
    //for the loop we have to loop through to affect all the delete button 
    //
    document.querySelectorall('.js-delete-btn').forEach((deleteButton, index)=>{   //think about it. everytime ami jinish add krtesi, eita tolistobject eh joma hoitese. prottekta delete button eh amr eventlistener dite hbe.  
        deleteButton.addEventListener('click',()=> {                               // ami for each die, each button eh eventlisner add krtesi. prottek buttoner queryselector, deletebuton variable eh add hoitese.                 
            todoList.splice(index,1)                                                //ei line eh ami jodi clickk krpi tailem, ei index er element delete hoe jabe.
        })
    })
}
