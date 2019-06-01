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
            <nav className='navSection'>
              <div className="authorImage">
                <img alt="Luis Manzanero" src="../../../public/favicon.ico"/>
              </div>
              <h1>Luis Manzanero</h1>
              <span><a href="#luis">Environmental Scientist, GIS Specialist, Software Developer</a></span>
              <div className="navBar">
                <ul>
                  <li className="navItem"><Link to="/">Home</Link></li>
                  <li className="navItem"><Link to="/about">About</Link></li>
                  <li className="navItem"><Link to="/blog">Blog</Link></li>
                  <li className="navItem"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <footer>All Rights Reserved to Luis Manzanero</footer>
            </nav>
            
        </React.Fragment>
  );
}

export default NavBar;