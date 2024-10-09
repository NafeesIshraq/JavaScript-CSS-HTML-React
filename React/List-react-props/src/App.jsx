import List from './List.jsx'


function App() {

  const fruits = [{id:1, name: "apple", calories: 95}, 
                  {id:2, name: "orange", calories: 45}, 
                  {id:3, name: "banana", calories: 37}]
  


  //lets check if our code is reusable

  const vegetables = [{id:6, name: "bhendi", calories: 95}, 
                   {id:7, name: "mishtikumra", calories: 145}, 
                   {id:8, name: "potol", calories: 32}]

    // this is shortcircuiting
  return (
    <>
    
      {fruits.length > 0 && <List items = {fruits} category = "fruits"/>}
      {vegetables.length > 0 && <List items = {vegetables} category = "vegetables"/>}
    
    </>
  )
}

export default App
