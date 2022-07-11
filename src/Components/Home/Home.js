import React from 'react'
import './Home.css'

// images and styling tbd
export default function Home() {
  return (
    <div className='home-container'>
      <div className="content">
        <div className="info">
          <div className="title">
            Western <br /> Developers <br /> Society
          </div>
          <div className="text">
            Building community, one life of code at a time.
          </div>
        </div>

        <div className="pic">
          <img src='images/tech.png'></img>
        </div>
      </div>
    </div>

  )
}
