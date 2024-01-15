import React from 'react'
import './Hero-Log.css'

import Journal from '../assets/journal.png'

const HeroLog = () => {
    return (
        <div className='signup featured'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Journal} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Log your shadow wrestling sessions</h2>
                    <p>Keep track of all your shadow wrestling practice sessions and see your results progress fast!</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <button className='btn'>Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroLog
