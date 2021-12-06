import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";


const PostPage = () => {
    const params = useParams()
    const [currentPost, setCurrentPost] = useState({})

    useEffect(() => {
        getCurrentPost(params.id)
    }, [params.id])

    async function getCurrentPost(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (response.status === 200) {
                const data = await response.json()
                setCurrentPost({...data})
            } else {
                throw new Error()
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h1>Post #{params.id}</h1>
            <h4>Title</h4>
            <p>{currentPost.title}</p>
            <h6>Body</h6>
            <p>{currentPost.body}</p>
            <button className='btn'>
                <Link to='/'>Back</Link>
            </button>
        </div>
    );
};

export default PostPage;