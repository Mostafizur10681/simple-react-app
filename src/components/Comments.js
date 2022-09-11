import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Comments.css';
const Comments = ({ comment }) => {

    const { id, name, email, body } = comment;
    const navigate = useNavigate()

    const handleComments = () => {
        navigate(`/${id}`)
    }
    return (
        <div className='card'>
            <h2>Name: <span>{name}</span></h2>
            <h3>Email: <span>{email}</span></h3>
            <p>{body}</p>
            <button className='btn' onClick={() => handleComments(id)}>Learn More</button>
        </div>
    );
};

export default Comments;