import React from 'react'
import Portifolio1 from '../../images/Portifolio1.jpg';
import Portifolio2 from '../../images/Portifolio2.jpg';
import Portifolio3 from '../../images/Portifolio3.jpg';
import Portifolio4 from '../../images/Portifolio4.jpg';

export default function Portifolio() {
  return (
    <div className='text-light px-5'>
      <h3 className='mt-3 mySkillsTitle'>My Portfolio</h3><hr/>
      <div className="myPortifolio d-flex justify-content-around flex-wrap mt-3">
        <a href="https://to-do-list-firdavs-2.vercel.app/"><img id='p1' src={Portifolio1} alt="img" className='portifolio '/></a>
        <a href="https://mamlakatlar-haqida.vercel.app/"><img id='p2' src={Portifolio2} alt="img" className='portifolio '/></a>
        <a href="https://images-search-azure.vercel.app/"><img id='p1' src={Portifolio3} alt="img" className='portifolio'/></a>
        <a href="https://movie-search-opal.vercel.app/"><img id='p2' src={Portifolio4} alt="img" className='portifolio '/></a>
      </div>
    </div>
  )
}
