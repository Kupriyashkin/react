import {React, useRef, useState} from 'react'
import ClassCounter from './component/ClassCounter';
import Counter from './component/Counter';
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

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !==post.id))
  }

  const sortPosts =(sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">

      <PostForm create={createPost}/>

      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name:'По названию'},
          {value: 'body', name:'По описанию'}

        ]}
        />
      </div>

      {posts.length
      ?<PostList remove={removePost} posts={posts} title = "Posts 1"/>
      : <h2 style={{textAlign: 'center', color: 'gray'}}>Здесь будут отображаться посты</h2>
      }

    </div>
  );
}

export default App;
