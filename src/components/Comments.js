import React from 'react';
import './Comments.css';
const Comments = ({ comment }) => {

    const { name, email, body } = comment;
    return (
        <div className='card'>
            <h2>Name: <span>{name}</span></h2>
            <h3>Email: <span>{email}</span></h3>
            <p>{body}</p>
        </div>
    );
};

export default Comments;