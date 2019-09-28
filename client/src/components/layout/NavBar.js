import React, { useState } from 'react';  
import { Link } from 'react-router-dom'; 

  const NavBar = () =>{
    const [toggleState, setToggleState] = useState(false);

    const toggle = () => {
        const { innerWidth} = window; 
        //ensures that toggle only works when screen width is less than 750px's
        if(innerWidth < 750){
          setToggleState(toggleState === false ? openSideNav() : closeSideNav());
        }
      } 

    const openSideNav = () => {
      //Add margin and width 
      document.querySelector("#navSection").style.width = "300px";
      document.querySelector("#navSection").style.marginLeft = "0";
      document.querySelector(".mainSection").style.marginLeft = "300px";
      return true;
    }

    const closeSideNav = () => {
      //remove margin and width
      document.querySelector("#navSection").style.width = "0";
      document.querySelector("#navSection").style.marginLeft = "-300px";
      document.querySelector(".mainSection").style.marginLeft = "0";
      console.log("closing Side Nave"); 
      return false;
    }

  return (
        <div id="navSection" className="sideNav">
            <button className="nav-icon" onClick={toggle}>Menu</button> 
            <nav>
              <div className="authorImage">
                <img alt="Luis Manzanero" src="luis.jpg"/>
              </div>
              <h1>Luis Manzanero</h1>
              <p>Environmental Scientist, Innovator, & Software Developer from Belize</p>
              <div className="navBar">
                <ul>
                  <li className="navItem" onClick={toggle}><Link to="/">Home</Link></li>
                  <li className="navItem" onClick={toggle}><Link to="/about">About</Link></li>
                  <li className="navItem" onClick={toggle}><Link to="/resume">Resume</Link></li>
                  <li className="navItem" onClick={toggle}><Link to="/projects">Projects</Link></li>
                  <li className="navItem" onClick={toggle}><Link to="/blog">Blog</Link></li>
                  <li className="navItem" onClick={toggle}><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <footer>
                <div className="social-links">
                    <ul>
                      <li><a href="#github"><i className="icon ion-social-github"></i></a></li>
                      <li><a href="#github"><i className="icon ion-social-facebook"></i></a></li>
                      <li><a href="#github"><i className="icon ion-social-linkedin"></i></a></li>
                      <li><a href="#github"><i className="icon ion-social-instagram"></i></a></li>
                    </ul>
                </div>
                <p>All Rights Reserved to Luis Manzanero</p>
              </footer>
            </nav>
        </div>
  );
}

export default NavBar;