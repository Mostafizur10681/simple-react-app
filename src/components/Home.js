import React, { useEffect, useState } from 'react';
import Comments from './Comments';
import './Home.css'


const Home = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className='main-div'>
            <h1 className='heading'>Our Clients Comments</h1>
            <hr />

            <div className='container'>
                {
                    comments.map(comment => <Comments
                        key={comment.id}
                        comment={comment}
                    ></Comments>)
                }
            </div>
        </div>
    );
};

export default Home;