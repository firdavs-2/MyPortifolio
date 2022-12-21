import React from 'react'

export default function Home() {
  return (
    <div className='text-light px-5 h-100'>
      <h3 className='mt-3 mySkillsTitle'>About me</h3><hr/>
      <div className="h-75 w-100 d-flex">
        <div className="myImformation w-50 h-100 ">
          <div className="aboutSection">Contact</div>
          <div className="aboutInform">fir6avs@gmailo.com</div>
          <div className="aboutInform">8 90 880 45 88</div>
          <div className="aboutSection">Education</div>
          <div className="aboutInform">progress edu</div>
          <div className="aboutInform">Serius acodemy</div>
        </div>
        <div className="myImformation w-50 h-100">
        <div className="aboutSection">Work experience</div>
          <div className="aboutInform">IT Park</div>
          <div className="aboutInform">Volunteering</div>
          <div className="aboutSection">Languages</div>
          <div className="aboutInform">Uzbek</div>
          <div className="aboutInform">English</div>
        </div>
      </div>
    </div>
  )
}
