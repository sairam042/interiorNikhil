import React from 'react'
import image from '../assets/furniture.webp'
import whatsApp from '../assets/whatsAppLogo.webp'
import facebook from '../assets/facebookLogo.webp'
import insta from '../assets/instaLogo.webp'
import shakeHands from '../assets/shakeHands.webp'



function ContactUs() {
  return (
    <div id='contactUsDiv'>
      <h1 id='contactUsHeading'>Contact Us, Get <span id='forColor'>Free</span> Quote <img id='shakeHands' src={shakeHands} alt="" /> </h1>

      <div id='formDiv'>
        <div id='eyesContainer'>
          <div className='eyeBox'>
            <div className='eyeBall'></div>
          </div>
          <div className='eyeBox'>
            <div className='eyeBall'></div>
          </div>
        </div>
        <input type='text' placeholder='Enter Your Name'></input>
        <input type='number' placeholder='Mobile Number'></input>
        <button id='submitButton'>Submit</button>
      </div>

      <div id='logosDiv'>
        <img src={whatsApp} alt="" />
        <img src={facebook} alt="" />
        <img src={insta} alt="" />
      </div>

      <footer>
        <h3>&copy; 2024 <span id='jrColor'>JR</span> Interiors. All rights reserved.</h3>
      </footer>

    </div>
  )
}

export default ContactUs