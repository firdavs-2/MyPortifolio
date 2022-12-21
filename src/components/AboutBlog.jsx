import React from 'react'
import user from '../images/firdavs.jpg'
import CW from '../documents/My_CV.pdf'


export default function () {
  return (
   
      <div className="aboutblog">
        <img className='userImg' src={user} alt="" />
        <h5>Firdavs Sattorov</h5>
        <h6>Hi, my name is Firdavs and I'm a junior Frontend developer. Welcome to my personal blog</h6>
        <button><a href={CW} download="My CW"> Download my CW</a></button>
      </div>
    
  )
}
