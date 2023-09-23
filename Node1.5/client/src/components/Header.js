import React, { useEffect, useState } from 'react'
import {fetchGET} from './utils';
import { Outlet } from 'react-router-dom';

export default function Header(){
    const [posts, setPosts] = useState([]);

    const fetchData = async()=>{
        const url = 'http://localhost:8000';
        const result = await fetchGET(url);
        setPosts(result.posts);
    }
    useEffect(()=>{
        fetchData();
    });

    console.log(posts);

    return(
        <div>
            <h1>REACT!!!!!</h1>
            <ol>
                {posts?.map((post)=>(
                        <li><a href={`/post/read/${post.post_id}`}>{post.title}</a></li>
                    ))}
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ol>
            <a href="/post/create">CREATE</a>
            <Outlet/>
        </div>
    )
}