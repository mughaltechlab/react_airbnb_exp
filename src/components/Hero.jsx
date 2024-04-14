import React from 'react'
import gridImg from '../assets/grid.png'

function Hero() {
  return (
    <section className="hero">
        <img className='gridImg' src={gridImg} alt="grid image"/>
        <div className="exp_text_wrapper">
            <h1 className='exp_title'>Online Experiences</h1>
            <p className='exp_text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
  )
}

export default Hero