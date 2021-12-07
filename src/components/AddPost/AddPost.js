import React, {useState} from 'react';

const AddPost = ({createNewPost, currentId}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const post = {
        title,
        body,
        id: currentId
    }

    function onSubmit(e) {
        e.preventDefault()
        createNewPost(post)
        setBody('')
        setTitle('')
    }

    return (
        <>
            <button type="button"
                    className="btn btn-secondary mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                Create new post
            </button>
            <div
                className="modal fade"
                id="exampleModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"
                                id="exampleModalLabel"
                            >Add new post</h5>
                            <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >Post title:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >Post body:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Body"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={onSubmit}
                                data-bs-dismiss="modal"
                                disabled={!title || !body}
                            >Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddPost;