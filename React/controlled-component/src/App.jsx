import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import AddItems from './AddItems.jsx';
import SearchItem from './SearchItem.jsx';
import { useState,useEffect } from 'react';


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("")

  useEffect(()=>{
    localStorage.setItem('shoppinglist',JSON.stringify(items))
  },[items])


  const handleInput=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    AddItem(newItem);
    setNewItem("");
  }


  const AddItem=(item)=> {
    const id = items.length? items[items.length -1].id +1: 1;
    const MyNewItem = {
      id, checked: false, item
    };
    const ListItems =  [...items, MyNewItem];
    setItems(ListItems);
  }
  








  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    
  }

  return (
    <div className="App">
      <Header title = "Groceries List"/>
      
      <AddItems
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleInput={handleInput}
      />

      <SearchItem
        search = {search}
        setSearch = {setSearch}
      
      />
      <Content 
        items ={items.filter((item)=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        
        handleCheck = {handleCheck}
        handleDelete = {handleDelete} 
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App