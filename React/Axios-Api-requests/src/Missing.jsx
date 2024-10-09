import {Link } from 'react-router-dom'




const Missing =() => {
    return (
        <main className = "Missing">

            <h2>Post not Found</h2>
            <p>Lol Dissapointing~!</p>
            <p>
                <Link to ="/" > Visit Home Page Again </Link>
            </p>
        </main>);
}

export default Missing;