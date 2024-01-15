import React from 'react'
import './Hero.css'
import Suplex from '../assets/hero-img.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
        <div className='left'>
            <p>Shadow Wrestler is an easy to use timer to help wrestlers practice their fundementals.</p>
            <h1>Drill the moves by yourself or with your teammates</h1>
            <p>Videos, Practice Journal, Custom move sequences, speed settings and variations</p>
            <div className='input-container'>
                <button className='btn'>Get Started</button>
            </div>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                <img src={Suplex} alt='' />
            </div>

        </div>

        </div>
    </div>
  )
}
