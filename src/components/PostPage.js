import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";


const PostPage = () => {
    const params = useParams()
    const [currentPost, setCurrentPost] = useState({})
    const [isOk, setIsOk] = useState(false)

    let content = null

    useEffect(() => {
        getCurrentPost(params.id)
    }, [params.id])

    async function getCurrentPost(id) {  // get current post
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if (response.status === 200) {
                const data = await response.json()
                setCurrentPost({...data})
                setIsOk(true)
            } else {
                setIsOk(false)
            }
        } catch (e) {
            console.error(e)
        }
    }
    if (isOk) {
        content = <>
            <h5 className="card-title">{currentPost.title}</h5>
            <p className="card-text">{currentPost.body}.</p>
        </>
    } else {
        content = <>
            <h2>You created this post.</h2>
        </>
    }

    return (
        <div className='container mt-5'>
            <div className="card text-center">
                <div className="card-header">
                    Post #{params.id}
                </div>
                <div className="card-body">
                    {content}
                    <Link to='/' className="btn btn-outline-secondary">Go back</Link>
                </div>
                <div className="card-footer text-muted">
                    Provided by the service JSON.placeholder
                </div>
            </div>
        </div>
    );
};

export default PostPage;