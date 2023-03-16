import "./navbar.css";
import {useState} from 'react';
import React from 'react'
import {Link,NavLink} from "react-router-dom";
import Logo from "./../../images/logo.png"
import  {links} from "./../../data";
import {FaBars} from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai';
const Navbar = () => {
  const [isNavShowing,setIsNavShowing] = useState(false);
  return (
    <nav>
    <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Image"/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav' }`}>
            {
              links.map(({name,path},index)=>{
                return(
                  <li key={index}>
                  <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ""} >{name}</NavLink>
                </li>
                )
              })
            }
        </ul>
        <button className="nav__toogle-btn" onClick={()=>
        setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ? <AiOutlineCloseCircle/> : <FaBars/>
          }
        </button>

    </div>
    </nav>
  )
}

export default Navbar