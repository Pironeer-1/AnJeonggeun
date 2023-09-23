import React, { useState } from "react";
import { fetchPOST } from "./utils";
import { useNavigate } from "react-router-dom";

export default function Create(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const onClick = async (event)=>{
        event.preventDefault();
        const url='http://localhost:8000/post/create';
        const body={
            title:title,
            content: content
        };
        const result = await fetchPOST(url,body);
        setTitle('');
        setContent('');
        // navigate(`/post/read/${result.insertId}`);
        navigate('/');
    }
    return(
        <form>
            <input type="text" name="title" id="" 
                value={title} 
                onChange={(event)=>setTitle(event.target.value)}/>
            <textarea name="content" id="" cols="30" rows="10" 
                value={content} 
                onChange={(event)=>setContent(event.target.value)}></textarea>
            <button onClick={onClick}>Submit</button>
        </form>
    )
}