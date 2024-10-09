const NewPost =( {handleSubmit, postBody,setPostBody,postTitle,setPostTitle} ) => {
    return (
        <main className = "NewPost">


            <h2>New post</h2>
            <form className = "newPostForm" onSubmit={handleSubmit}>

                <label htmlFor = "postTitle"> Title:</label>

                <input
                    id = "postTitle"
                    type = "text"
                    required
                    value={postTitle}
                    onChange = {(e) => setPostTitle(e.target.value)}
                
                />

                <label htmlFor = "postBody" >Post:</label>
                <textarea
                    id = "postBody"
                    type = "text"
                    required
                    value={postBody}
                    onChange = {(e) => setPostBody(e.target.value)}
                
                />

                <button type = 'submit' > Submit</button>
          
            </form>


        </main>
    );
}

export default NewPost;