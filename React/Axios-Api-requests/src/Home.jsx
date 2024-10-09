import Feed from "./Feed.jsx";

const Home =({posts}) => {
    return (
        <main className = 'Home'>

            {posts.length? (
                <Feed posts = {posts}/>
            ):(
                <p>No posts to Display</p>
            )}
           
        </main>);
}

export default Home;