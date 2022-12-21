import React from 'react'
import telegram from '../../images/telegram.jpg'
import instagram from '../../images/instagram.jpg'
import facebook from '../../images/facebook.jpg'

export default function Blogs() {
  return (
    <div className='text-light px-5'>
      <h3 className='mt-3 myTitle'>My Blogs</h3><hr />
      <div className="socialBlogs d-flex justify-content-between mt-5">

        <div className="card blogsCard" style={{ width: "30%" }}>
          <img src={telegram} class='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className='card-title'>Meni Telegramda Kuzatib Boring.</h5>
            <a href="https://t.me/fir6avs" class='btn btn-primary'>Go my blogs</a>
          </div>
        </div>
        <div className="card blogsCard" style={{ width: "30%" }}>
          <img src={instagram} class='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className='card-title'>Meni Instagramda Kuzatib Boring.</h5>
            <a href="https://instagram.com/fir6.avs" class='btn btn-primary'>Go my blogs</a>
          </div>
        </div>
        <div className="card blogsCard" style={{ width: "30%" }}>
          <img src={facebook} class='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className='card-title'>Meni Facebookda Kuzatib Boring.</h5>
            <a href="https://facebook.com/908804588" class='btn btn-primary'>Go my blogs</a>
          </div>
        </div>
      </div>
    </div>

  )
}
