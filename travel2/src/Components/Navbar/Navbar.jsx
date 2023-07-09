import React, {useState} from 'react'
import './navbar.css'
import {MdTravelExplore} from  'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState ('navBar')
  //function to toggle navBar
  const showNav = ()=>{
    setActive('navbar activeNavbar')
  }
  // function to remove navBar
  const removeNavbar = ()=>{
    setActive('navbar')
  }


  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdTravelExplore className="icon"  /> YATRA. </h1>
          </a>

        </div>
        <div className={active}>
          <ul className="navLists flex">

            <li className="navitem">
             <a href="#" className="navLink">Home</a> 
            </li>

            <li className="navitem">
             <a href="#" className="navLink">Packages</a> 
            </li>

            <li className="navitem">
             <a href="#" className="navLink">Shop</a> 
            </li>

            <li className="navitem">
           <Link to="/about" className="navLink">About</Link>
            </li>


            <li className="navitem">
             <a href="#" className="navLink">Pages</a> 
           </li>

           <li className="navitem">
             <a href="#" className="navLink">News</a> 
            </li>

            <li className="navitem">
             <a href="#" className="navLink">Contact</a> 
            </li>
            <button className='btn'>
            <Link to="/book" className="navLink">BOOK NOW</Link>
            </button>


          </ul>
          <div onClick={removeNavbar}  className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} 
        className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>


      </header>
    </section>
  )
}

export default Navbar