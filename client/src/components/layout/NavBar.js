import React from 'react';  

const NavBar = () =>{
  return (
        <React.Fragment>
           <button className="nav-icon">Menu</button>
           {/* todo: Toggle class side-nav for mobile responsiveness and add margin to offset mainsection*/}
            <nav className="navSection side-nav">Nav Section</nav>
        </React.Fragment>
  );
}

export default NavBar;