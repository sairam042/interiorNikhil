import React from 'react'
import logo from '../assets/JRlogo.png'

function Home() {
    return (
        <div className='homeContainer'>
            <div id='navBar'>
                <h3 id='logoDiv'><img src={logo} alt="" /></h3>
                <div id='navLinks'>
                    <h3>HOME</h3>
                    <h3>OUR WORK</h3>
                    <h3>GET QUOTE</h3>
                </div>
            </div>

            <div id='contentDiv'>
                <div id='homeContent'>
                    <h1>From vision to perfection, we bring your spaces to life.</h1>
                    <h5>Because every space deserves a soul</h5>
                </div>
            </div>

        </div>
    )
}

export default Home