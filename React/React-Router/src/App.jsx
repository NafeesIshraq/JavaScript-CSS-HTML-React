import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx';
import About from './About.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import Missing from './Missing.jsx';

import {Route, Routes, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

import {format} from 'date-fns';



function App() {

  const [posts, setPosts] = useState([{
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }])
  const [search, setSearch] = useState("");
  
  const [searchResults, setSearchResults] = useState([])

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();


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

  return (
    <div>

      <Header  title = "React Js Blog"/>

      <Nav search={search} setSearch={setSearch} />

      <Routes> 

        <Route  path="/"          element = {<Home posts = {searchResults} />}     />

        <Route  path ="/post"     element = {<NewPost  handleSubmit = {handleSubmit} postTitle = {postTitle}
                                                        setPostTitle = {setPostTitle} postBody = {postBody} setPostBody = {setPostBody}/>}  />
         
        <Route path ="/post/:id"  element = {<PostPage posts = {posts} handleDelete = {handleDelete}/>} />
       
        <Route path ="/about"     element = {<About/>}    />
       
        <Route path ="*"          element = {<Missing/>}  />
       
        
      </Routes>
      
      <Footer/>


    </div>
  );
}

export default App
