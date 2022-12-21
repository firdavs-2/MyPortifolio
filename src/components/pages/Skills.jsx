import React from 'react'

export default function Skills() {
  return (
    <div className='text-light w-100 h-100 px-5'>
      <h3 className='mt-3 myTitle'>My Skills</h3><hr/>
      <div className="mySkill d-flex align-items-center justify-content-between pt-5">
        <h3>HTML5</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>Css</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>Sass</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>Bootstrap</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>JavaScript</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>React</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="mySkill d-flex align-items-center justify-content-between">
        <h3>English</h3>
        <div class="progress w-50">
          <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  )
}
