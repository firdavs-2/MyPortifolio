import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Home from './pages/Home'
import Portifolio from './pages/Portifolio';
import Skills from './pages/Skills';

export default function MainBlog() {
  return (
    <div className="mainblog">
       <BrowserRouter>
       <div className="sidebar">
        <Link to="/home" className='sidebarItem'><i class="bi bi-house sidebarItems"></i></Link>
        <Link to="/skills" className='sidebarItem'><i class="bi bi-command sidebarItems"></i></Link>
        <Link to="/portifolio" className='sidebarItem'><i class="bi bi-briefcase sidebarItems"></i></Link>
        <Link to="/blogs" className='sidebarItem'><i class="bi bi-globe sidebarItems"></i></Link>
        </div>
        <div className="body w-100 h-100">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/portifolio' element={<Portifolio/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}
