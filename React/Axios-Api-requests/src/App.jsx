import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx';
import About from './About.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import Missing from './Missing.jsx';
import EditPost from './EditPost.jsx';

import {Route, Routes, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

import {format} from 'date-fns';

import api from './api/posts.jsx'



function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  
  const [searchResults, setSearchResults] = useState([])

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");


  const navigate = useNavigate();

  

  //axios fetch function
  useEffect(()=>{

    const fetchPosts = async() =>{
      try{
        const response = await api.get('/posts');
        setPosts(response.data);

      }catch(err){
        //it catches everything outside 200 range. automatically
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else{
          console.log(err.message);
        }



      }
    }

    fetchPosts();


  },[])

  useEffect(()=>{

    const filteredResult = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResult.reverse());

    


  },[posts,search]);



  const handleDelete = (id) =>{
    const postList = posts.filter((post)=> post.id !== id );
    setPosts(postList);
    navigate('/'); 
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1; 
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');

    const newPost = {id, title:postTitle, datetime, body: postBody};
    const allPost = [...posts, newPost];  //  this is an array. you keep forgetting this. ARRAY of OBJECTS ---- 

    setPosts(allPost);
    setPostTitle('');
    setPostBody('');

    navigate('/');
    
    
  }

  const handleEdit = async (id) =>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title:editTitle, datetime, body: editBody};

    try{
      const response = await api.put(`/posts/${id}`,updatedPost);
      setPosts(posts.map(post => (post.id === id)? {...response.data}: post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div>

      <Header  title = "React Js Blog"/>

      <Nav search={search} setSearch={setSearch} />

      <Routes> 

        <Route  path="/"          element = {<Home posts = {searchResults} />}     />

        <Route  path ="/post"     element = {<NewPost  handleSubmit = {handleSubmit} postTitle = {postTitle}
                                                        setPostTitle = {setPostTitle} postBody = {postBody} setPostBody = {setPostBody}/>}  />
        
        <Route  path ="/edit/:id"     element = {<EditPost  posts = {posts} handleEdit = {handleEdit} editTitle = {editTitle}
                                                        setEditTitle = {setEditTitle} editBody = {editBody} setEditBody = {setEditBody}/>}  />
         
        <Route path ="/post/:id"  element = {<PostPage posts = {posts} handleDelete = {handleDelete}/>} />
       
        <Route path ="/about"     element = {<About/>}    />
       
        <Route path ="*"          element = {<Missing/>}  />
       
        
      </Routes>
      
      <Footer/>


    </div>
  );
}

export default App
