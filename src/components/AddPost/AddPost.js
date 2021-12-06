import './AddPost.css'

import React, {useState} from 'react';

const AddPost = ({createNewPost, closeModal}) => {

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
        <div
            className='form-wrapper'
            onClick={closeModal}
        >
            <form
                className='form-add'
                onSubmit={onSubmit}
                onClick={e => e.stopPropagation()}
            >
                <input
                    className='form-control mb-3'
                    type="text"
                    placeholder='Post title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    className='form-control'
                    type="text"
                    placeholder='Post body'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button
                    className='btn btn-primary mt-2'
                    onClick={() => createNewPost(post)}
                    disabled={title === '' || body === ''}
                >Create</button>
            </form>
        </div>
    );
};

export default AddPost;