import './PostItem.css'

import React from 'react';
import {useHistory} from "react-router-dom";

const PostItem = ({post, removePost}) => {
    let router = useHistory()

    return (
        <li className='post__item'>
            <div className="post__item-content">
                <h3 className='post__item-title'>{post.id}. {post.title}</h3>
                <div className='post__item-text'>
                    {post.body.length >= 155 ? post.body.slice(0, 152) + '...' : post.body}
                </div>
            </div>
            <div className="post__item-btns">
                <button
                    className='btn btn-primary mb-3'
                    onClick={() => {router.push(`/${post.id}`)}}
                >Open post</button>
                <button
                    className='btn btn-danger'
                    onClick={() => removePost(post.id)}
                >Remove</button>
            </div>
        </li>
    );
};

export default PostItem;