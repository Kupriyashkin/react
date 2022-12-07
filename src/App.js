import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <div className='navbar__links'>
          <Link href='/about'>About</Link>
          <Link href='/posts'>Posts</Link>
        </div>
      </div>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/posts'>
        <Posts/>
      </Route>
    </BrowserRouter>
  )
}

export default App;
