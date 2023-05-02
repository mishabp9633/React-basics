import React from 'react'
import './MainBody.css'
import watch from '../../src/assets/watchicon.png'
import phone from '../../src/assets/phoneimage.png'



const MainBody = () => {
  return (
    <div className='mainBody'>
      <div className='left'>
        <h1>Just one click away to <br /> create a modern app <br /> landing page</h1>
        <p>App landing page is an important part of mobile app development <br /> and app marketing strategy  use your mobile device to quickly <br /> create a landing page</p>
        <div className='getwatch'>
        <button className='getbtn'>Let's Get Started</button>
        <div className='logowatch'>
        <img src={watch} alt="" />
        <button className='watchbtn'>Watch a demo</button>
        </div>
        </div>
      </div>
      <div className='right'>
        <img src={phone} alt="" />
      </div>
    </div>
  )
}

export default MainBody
