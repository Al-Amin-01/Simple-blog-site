import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';
const Blogdetails = () => {
    const navigate=useNavigate();
    const {id} = useParams();
    const { data:blog,error,isPending } = useFetch("http://localhost:8000/blogs/"+id);
    const handleDelete =()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:'DELETE'

        }).then(()=>{
            navigate('/');
        })
    }
    return (
        
        <div className='blog-details'>
           {isPending && <div>loading.... </div>}
           {error && <div>{error.message}</div>}
           {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleDelete}>delete</button>
            </article>
           )}
        </div>
    );
};

export default Blogdetails;