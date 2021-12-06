import './App.css';
import {useEffect, useState} from "react";
import PostList from "./components/PostList/PostList";
import AddPost from "./components/AddPost/AddPost";
import Pagination from "./components/Pagination/Pagination";

function App() {

    const [posts, setPosts] = useState([]) // Массив постов
    const [visitForm, setVisitModal] = useState(false) // Флаг включение домального окна создания поста
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const limit = 10

    useEffect(() => { // загрузка данных при рендере страницы
        fetchData()
    }, [page])

    async function fetchData() { //получение данных с сервера
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const data = await response.json()
        setPosts(data)
        setTotalPages(Math.ceil(response.headers.get('x-total-count') / limit)) // вычисляем количество страниц
    }
    function removePost (id) { // функция для удаления поста
        setPosts([...posts.filter(post => post.id !== id)])
    }

    function createNewPost(post) { // функция для создания нового поста
        setVisitModal(false)
        setPosts([post, ...posts])
    }

    function changePage (page) {
        setPage(page)
    }

    return (
        <div className="App">
            {visitForm ? <AddPost createNewPost={createNewPost}/> : null}
            <button className='btn' onClick={() => setVisitModal(true)}>Create new post</button>
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
    );
}

export default App;
