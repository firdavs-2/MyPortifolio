import React from 'react'
import AboutBlog from './components/AboutBlog'
import SocialBlog from './components/SocialBlog'
import MainBlog from './components/MainBlog'

export default function App() {
  return (
    
    <div className='wrapper'>
      <SocialBlog/>
      <AboutBlog/>
      <MainBlog/>
    </div>
  )
}
