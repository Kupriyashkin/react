import {React, useMemo, useRef, useState} from 'react'
import ClassCounter from './component/ClassCounter';
import Counter from './component/Counter';
import PostFilter from './component/PostFilter';
import PostForm from './component/PostForm';
import PostItem from './component/PostItem';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';
import MySelect from './component/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

const [filter, setFilter] = useState({sort:'', query:''})


  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  },
[filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },
  [filter.query, sortedPosts])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !==post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "Posts 1"/>
    </div>
  );
}

export default App;
