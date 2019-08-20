import React from 'react';  
import { Link } from 'react-router-dom'; 

  const NavBar = () =>{
    // const [toggleState, setToggleState] = useState('navSection');

  const toggle = () => {
      // setToggleState(toggleState === 'side-nav' ? 'navSection' : 'side-nav');
      console.log('Functionality to toggle main and side nav');
    }

  return (
        <React.Fragment>
            <button className="nav-icon" onClick={toggle}>Menu</button> 
            <nav className='navSection side-nav'>
              <div className="authorImage">
                <img alt="Luis Manzanero" src="luis.jpg"/>
              </div>
              <h1>Luis Manzanero</h1>
              <p>Environmental Scientist, Innovator, & Software Developer from Belize</p>
              <div className="navBar">
                <ul>
                  <li className="navItem"><Link to="/">Home</Link></li>
                  <li className="navItem"><Link to="/about">About</Link></li>
                  <li className="navItem"><Link to="/resume">Resume</Link></li>
                  <li className="navItem"><Link to="/projects">Projects</Link></li>
                  <li className="navItem"><Link to="/blog">Blog</Link></li>
                  <li className="navItem"><Link to="/contact">Contact</Link></li>
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
            
        </React.Fragment>
  );
}

export default NavBar;