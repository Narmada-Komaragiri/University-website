import React, { useEffect, useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky,setsticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setsticky(true):setsticky(false)
    })
  },[])

  const [mobileMenu,setMobileMenu]= useState(false)
  const toggleMenu=()=>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);

  }
  return (
   <nav className={`container ${sticky?'dark-nav':''}`}>
     <i class="fa-sharp fa-solid fa-graduation-cap">  Educity</i>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0}duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260}duration={500}>program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}duration={500}>about us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260}duration={500}>campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260}duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={0}duration={-260} className='btn'>contact us</Link></li>
    </ul>
    <img src='https://static.vecteezy.com/system/resources/previews/009/393/526/original/menu-icon-sign-symbol-design-free-png.png' alt='' className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar