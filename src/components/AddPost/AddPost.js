import './AddPost.css'

import React, {useState} from 'react';

const AddPost = ({createNewPost}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const post = {
        title,
        body,
        id: Date.now()
    }

    function onSubmit(e) {
        e.preventDefault()
        setBody('')
        setTitle('')
    }

    return (
        <div className='form-wrapper'>
            <form className='form-add' onSubmit={onSubmit}>
                <input
                    className='form-input'
                    type="text"
                    placeholder='Post title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    className='form-input'
                    type="text"
                    placeholder='Post body'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button className='btn' onClick={() => createNewPost(post)}>Create</button>
            </form>
        </div>
    );
};

export default AddPost;