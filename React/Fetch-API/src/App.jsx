import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import AddItems from './AddItems.jsx';
import SearchItem from './SearchItem.jsx';
import { useState,useEffect } from 'react';
import apiRequest from './apiRequest.jsx';


function App() {

  const API_URL = "http://localhost:3500/items"; 

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=>{
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Got No Data. TEee HEee!");
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null); //to make sure it is reset. 

        }catch(err) {
          setFetchError(err.message); 
        } finally{
          setIsLoading(false);
        }
      }
      setTimeout(() => {
        (async () => await fetchItems())();
      },2000);
      
  },[]) 


  const handleInput=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    AddItem(newItem);
    setNewItem("");
  }


  const AddItem= async(item)=> {

    const id = items.length? items[items.length -1].id +1: 1;
    const MyNewItem = {
      id, checked: false, item
    };
    const ListItems =  [...items, MyNewItem];
    setItems(ListItems);

    const postOption ={
      method:'POST',
      header:{
        'content-type' : 'applicaiton/json'
      },
      body: JSON.stringify(MyNewItem)
    };

    const result =  await apiRequest(API_URL, postOption);
    if (result) setFetchError(errMsg);



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
        isLoading = {isLoading}
        fetchError = {fetchError}
        items ={items.filter((item)=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        
        handleCheck = {handleCheck}
        handleDelete = {handleDelete} 
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App