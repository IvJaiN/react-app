import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, removePost}) => {
    return (
        <ul className='posts__list'>
            {posts.map(post => (
                <PostItem
                    post={post}
                    key={post.id}
                    removePost={removePost}
                />
            ))}
        </ul>
    );
};

export default PostList;