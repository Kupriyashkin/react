import {React, useEffect, useState} from 'react'
import PostService from './API/PostService';
import PostFilter from './component/PostFilter';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import Loader from './component/UI/Loader/Loader';
import MyModal from './component/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {

const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
const [isPostLoading, setIsPostLoading] = useState(false)


useEffect(()=> {
  fetchPosts()
}, [])

const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
}

async function fetchPosts() {
  setIsPostLoading(true)
  const posts = await PostService.getAll()
  setPosts(posts)
  setIsPostLoading(false)
}

const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !==post.id))
}


  return (
    <div className="App">

      <MyButton style={{marginTop: '15px', marginLeft: '10px'}} onClick={()=> setModal(true)}>
        Create new post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>

      <PostFilter filter={filter} setFilter={setFilter}/>

      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "Posts"/>
      }

    </div>
  );
}

export default App;
