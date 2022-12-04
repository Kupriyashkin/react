import {React, useState} from 'react'
import PostFilter from './component/PostFilter';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import MyModal from './component/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

const [filter, setFilter] = useState({sort:'', query:''})

const [modal, setModal] = useState(false)

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "Posts 1"/>
    </div>
  );
}

export default App;
