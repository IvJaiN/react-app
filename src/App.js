import './App.css';
import {useEffect, useState} from "react";
import PostList from "./components/PostList/PostList";
import AddPost from "./components/AddPost/AddPost";

function App() {

    const [posts, setPosts] = useState([]) // Массив постов
    const [visitForm, setVisitModal] = useState(false) // Флаг включение домального окна создания поста

    useEffect(() => { // загрузка данных при рендере страницы
        fetchData()
    }, [])

    async function fetchData() { //получение данных с сервера
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }
    function removePost (id) { // функция для удаления поста
        setPosts([...posts.filter(post => post.id !== id)])
    }

    function createNewPost(post) { // функция для создания нового поста
        setVisitModal(false)
        setPosts([post, ...posts])

    }

    return (
        <div className="App">
            {visitForm ? <AddPost createNewPost={createNewPost}/> : null}
            <button className='btn' onClick={() => setVisitModal(true)}>Create new post</button>
            <PostList
                posts={posts}
                removePost={removePost}
            />
        </div>
    );
}

export default App;
