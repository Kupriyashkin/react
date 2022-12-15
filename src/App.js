import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './styles/App.css'

function App() {
  return (
    <>
     <div className='navbar'>
        <div className='navbar__links'>
          <Link href='/about'>About</Link>
          <Link href='/posts'>Posts</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default App;