import React from 'react'
import { Zoom } from 'react-reveal'
import './hero.css'


function Hero(props) {
  return (
    <>
    
        <div className={props.cName}>
            <img className={props.imgstyle} src={props.image} />
            <div className='hero__text'>
                <h1>{props.title}</h1>
                <p>{props.destination}</p>
                <Zoom bottom>
                  <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                </Zoom>
                
            </div>
        </div>      
    </>
  )
}

export default Hero