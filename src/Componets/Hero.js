import React from 'react'

import './hero.css'


function Hero(props) {
  return (
    <>
    
        <div className={props.cName}>
            <img className={props.imgstyle} src={props.image} />
            <div className='hero__text'>
                <h1>{props.title}</h1>
                <p>{props.destination}</p>
                  <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                
            </div>
        </div>      
    </>
  )
}

export default Hero