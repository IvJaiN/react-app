import React from "react";
import {useState, useEffect} from "react";
import {Route, Redirect, Switch} from "react-router-dom";

import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostPage from "./components/PostPage";

import './App.css'

const App = () => {

    const [posts, setPosts] = useState([]) // Array posts
    const [page, setPage] = useState(1) // current page
    const [totalPages, setTotalPages] = useState(0)
    const [currentId, setCurrentId] = useState(0) // id for new post
    const [visiblePosts, setVisiblePosts] = useState([]) // array posts on screen

    const limit = 10

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setTotalPages(Math.ceil(posts.length / limit)) // calc number pages
        setVisiblePosts(posts.slice(+`${page - 1}0`, +`${page}0`)) // update posts on screen
    }, [posts])

    useEffect(() => {
        setVisiblePosts(posts.slice(+`${page - 1}0`, +`${page}0`)) // update posts on screen on change page
    }, [page])


    async function fetchData() { // get data
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            if (response.status === 200) {
                const data = await response.json()
                setPosts(data)
                setTotalPages(Math.ceil(data.length / limit)) // calc number pages
                setCurrentId(data.length + 1)
                setVisiblePosts(data.slice(0, 10))
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
        setPosts([...posts, post])
        setCurrentId(oldId => oldId + 1)
    }

    function changePage(page) {
        setPage(page)
    }

    return (
        <Switch>
            <Route exact path='/'>
                <div className="App container">
                    <h1 className='text-center'>Posts app</h1>
                    <AddPost
                        createNewPost={createNewPost}
                        currentId={currentId}
                    />
                    <PostList
                        posts={visiblePosts}
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
