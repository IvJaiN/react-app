import './PostItem.css'

import React from 'react';

const PostItem = ({post, removePost}) => {
    return (
        <li className='post__item'>
            <div className="post__item-content">
                <h3 className='post__item-title'>{post.title}</h3>
                <div className='post__item-text'>{post.body}</div>
            </div>
            <div className="post__item-btns">
                <button
                    className='btn'
                    onClick={() => removePost(post.id)}
                >Remove</button>
            </div>
        </li>
    );
};

export default PostItem;