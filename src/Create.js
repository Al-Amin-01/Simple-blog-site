import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('jim');
    
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        fetch("http://localhost:8000/blogs/",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('blog added');
            navigate('/');
            
        })
    }
    return (
        <div className='create'>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required  
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="jim">jim</option>
                    <option value="jibon">jibon</option>
                    <option value="jami">jami</option>
                </select>
                <button>Add blog</button>
                
                
            </form>
        </div>
    );
};

export default Create;