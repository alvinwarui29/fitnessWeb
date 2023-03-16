import "./navbar.css";
import React from 'react'
import {Link,NavLink} from "react-router-dom";
import Logo from "./../../images/logo.png"
import  {links} from "./../../data";
import {FaBars} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav>
    <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Image"/>
        </Link>
        <ul className="nav__links">
            {
              links.map(({name,path},index)=>{
                return(
                  <li>
                  <NavLink to={path}>{name}</NavLink>
                </li>
                )
              })
            }
        </ul>
        <button className="nav__toogle-btn">
          <FaBars/>
        </button>

    </div>
    </nav>
  )
}

export default Navbar