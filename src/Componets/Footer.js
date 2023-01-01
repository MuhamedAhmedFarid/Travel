import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__top'>
            <div>
                <h2>Trippy</h2>
                <p>Choose your favourite destination</p>
            </div>
            <div className='footer__sociels'>
                <a href='#'><AiFillFacebook/></a>
                <a href='#'><BsInstagram/></a>
                <a href='#'><AiFillTwitterSquare/></a>
            </div>
        </div>
        <div className='footer__bottom'>
            <div>
                <h4>Project</h4>
                <a href='#'>Changelog</a> 
                <a href='#'>Status</a> 
                <a href='#'>Licnse</a> 
                <a href='#'>All Versions</a> 
            </div>

            <div>
                <h4>Cmmunity</h4>
                <a href='#'>GitHib</a> 
                <a href='#'>Issues</a> 
                <a href='#'>Project</a> 
                <a href='#'>Twitter</a> 
            </div>


            <div>
                <h4>Help</h4>
                <a href='#'>Support</a> 
                <a href='#'>Troubleshooting</a> 
                <a href='#'>Contact Us</a>  
            </div>


            <div>
                <h4>Others</h4>
                <a href='#'>Team of Service</a> 
                <a href='#'>Privacy Plicy</a> 
                <a href='#'>License</a>  
            </div>
        </div>
    </footer>
  )
}

export default Footer