import {React, useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyButton from "../component/UI/button/MyButton"
import PostForm from "../component/PostForm";
import MyModal from "../component/UI/MyModal/MyModal";
import PostFilter from "../component/PostFilter";
import PostList from "../component/PostList";
import Loader from "../component/UI/Loader/Loader";
import Pagination from '../component/UI/pagination/Pagination';

function Posts() {

const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [modal, setModal] = useState(false)
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
  const response = await PostService.getAll(limit, page)
  setPosts(response.data)
  const totalCount = (response.headers['x-total-count'])
  setTotalPages(getPageCount(totalCount, limit))
})

useEffect(()=> {
  fetchPosts()
}, [page])

const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
}

const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !==post.id))
}

const changePage = (page) => {
    setPage(page)
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

      {postError &&
        <h2>Error ${postError}</h2>
      }

      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "Posts"/>
      }
      <Pagination
      page={page}
      changePage={changePage}
      totalPages={totalPages}/>

    </div>
  );
}

export default Posts;
