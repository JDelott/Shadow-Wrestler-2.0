import React from 'react'
import './Hero-Timer.css'
import { Link } from 'react-router-dom'

import gif from '../assets/ShadowWrestlerGif.gif'

const HeroTimer = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={gif} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Get better at wrestling by drilling fundementals.</h2>
                    <p>Set the timer and parameters for a great shadow wrestling session, just like Coach Andrew calls out for warmups!</p>
                    <div className='input-container'>
                        <Link to="timer" >
                            <button className='btn'>Get Started</button>
                        </Link>    
                        </div>
                </div>

            </div>
        </div>
    )
}

export default HeroTimer
