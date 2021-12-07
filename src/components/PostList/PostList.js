import React from 'react';
import {useHistory} from "react-router-dom";

const PostList = ({posts, removePost}) => {
    let router = useHistory()
    return (
        <ul>
            {posts.map(post => (
                <li className="card mb-5" key={post.id}>
                    <div className="card-header">
                        Post #{post.id}
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="col-sm-6">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body.length >= 155 ? post.body.slice(0, 152) + '...' : post.body}</p>
                            </div>
                            <div className="col-sm-2 d-flex flex-column">
                                <button className="btn btn-primary align-self-center mt-2" onClick={() => {
                                    router.push(`/${post.id}`)
                                }}>Open post
                                </button>
                                <button className="btn btn-danger align-self-center mt-2"
                                        onClick={() => removePost(post.id)}>Remove post
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PostList;