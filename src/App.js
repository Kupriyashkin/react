import {React, useRef, useState} from 'react'
import ClassCounter from './component/ClassCounter';
import Counter from './component/Counter';
import PostItem from './component/PostItem';
import PostList from './component/PostList';
import MyButton from './component/UI/button/MyButton';
import MyInput from './component/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
    {/*Управляемый компонент*/}
      <MyInput
      value = {title}
      onChange = {e => setTitle(e.target.value)} type="text"
      placeholder="Post title"
      />
      <MyInput
      value = {body}
      onChange = {e => setBody(e.target.value)}
      type="text"
      placeholder="Body"
      />

      <MyButton onCLick={addNewPost} >New post</MyButton>
      </form>

      <PostList posts={posts} title = "Posts 1"/>
    </div>
  );
}

export default App;
