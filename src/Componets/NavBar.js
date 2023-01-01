import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
import { links } from "../data";
import {AiOutlineMenu} from 'react-icons/ai'
import {IoClose} from 'react-icons/io'

function NavBar() {
    
  return (
    <nav className="navbar__item">
      <h1 >Trippy</h1>
      {/* <div  className="menu__icon">
        <AiOutlineMenu className={this.state.clicked ? 'fas fa-titmes': 'fas fa-bars'}/>
        <IoClose className='fas fa-times' />
      </div> */}
      <ul className="nav__menu">
        {links.map(({ name, path, icon,cName }, index) => {
          return (
            <li key={index}>
                
              <NavLink className={cName} to={path}>
                
                {icon}
                <span>{name}</span>
                
                
              </NavLink>
            </li>
          );
        })}
        <button>Sign Up</button>
        

      </ul>
    </nav>
  );
}

export default NavBar;
