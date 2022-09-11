import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleComment.css'

const SingleComment = () => {
    let { id } = useParams();

    const [comment, setComment] = useState({})
    const { name, email, body } = comment;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    return (

        <div>
            <h1 className='heading'>Single Comment</h1>
            <hr />
            <div className='single-card'>
                <h2>Name: <span>{name}</span></h2>
                <h3>Email: <span>{email}</span></h3>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default SingleComment;