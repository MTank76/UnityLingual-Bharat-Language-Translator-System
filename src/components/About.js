import React from 'react'
import logo from '../img/about2.png';
import './about.css'
const About = () => {
  return (
    <div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>

      <div className='container_about'>
        <div className=''>

          <p className='text_about'>
            About Us
          </p>
          <p className='text2_about'>
            Empowering global communication with real-time language <br />
            translation and speech-to-text technology for seamless <br />
            interaction and accessibility.
          </p>

        </div>
        <div className='image_about'>

          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default About

