import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavbarStyles.css';

interface NavItem {
  name: string;
  path: string;
}

interface NavBarProps {
  navItems: NavItem[];
}



const NavBar: React.FC<NavBarProps> = ({ navItems }) => {

  const [mobileView, setMobileView] = useState(false);



  const toggleNavbar =()=>{
    setMobileView(!mobileView);
  }

  useEffect(()=>{
    console.log("use effect ran");

    // if (mobileView === true){
    //   viewMobileNav
    // } else{
    //   hideMobileNav
    // }
    
   
  })


  return (
    <nav className='nav'>

      <div className='items'>
        {navItems.map((item) => (
          <li key={item.path}>
           <Link to={item.path}><button className='butt'>{item.name}</button></Link>
          </li>
        ))}       
      </div>

      <div className='mobile' id={mobileView ? "true" : "false"}>
        <div className='items-hidden' >
          {navItems.map((item) => (
            <li key={item.path}>
            <Link to={item.path}><button className='butt'>{item.name}</button></Link>
            </li>
          ))}      
        </div>
      </div>
          <button className='show-button' onClick={toggleNavbar}>Show</button>

    </nav>
  );
};

export default NavBar;
