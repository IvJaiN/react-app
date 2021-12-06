import React from "react";
import {useState, useEffect} from "react";
import {Route, Redirect, Switch} from "react-router-dom";

import AddPost from "./components/AddPost/AddPost";
import PostList from "./components/PostList/PostList";
import Pagination from "./components/Pagination/Pagination";

import './App.css'
import PostPage from "./components/PostPage/PostPage";

const App = () => {


    const [posts, setPosts] = useState([]) // Array posts
    const [visitForm, setVisitModal] = useState(false) // State modal
    const [page, setPage] = useState(1) // current page
    const [totalPages, setTotalPages] = useState(0)
    const limit = 10

    useEffect(() => {
        fetchData()
    }, [page])

    async function fetchData() { // get data
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            if (response.status === 200) {
                const data = await response.json()
                setPosts(data)
                setTotalPages(Math.ceil(response.headers.get('x-total-count') / limit)) // calc number pages
            } else {
                alert('Posts not found')
            }
        } catch (e) {
            console.error(e)
        }
    }

    function removePost(id) { // function for remove post
        setPosts([...posts.filter(post => post.id !== id)])
    }

    function createNewPost(post) { // function for create post
        setVisitModal(false)
        setPosts([post, ...posts])
    }

    function changePage(page) {
        setPage(page)
    }

    function closeModal() {
        setVisitModal(false)
    }

    return (
        <Switch>
            <Route exact path='/'>
                <div className="App">
                    {visitForm ? <AddPost createNewPost={createNewPost} closeModal={closeModal}/> : null}
                    <button className='btn btn-primary mb-3 data-bs-toggle="modal" data-bs-target="#exampleModal">' onClick={() => setVisitModal(true)}>Create new post</button>
                    <PostList
                        posts={posts}
                        removePost={removePost}
                    />
                    <Pagination
                        totalPages={totalPages}
                        page={page}
                        changePage={changePage}
                    />
                </div>
            </Route>
            <Route exact path='/:id'>
                <PostPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>

    );
}
export default App;
