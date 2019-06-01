import React, {useState} from 'react';  

const NavBar = () =>{
  const [toggleState, setToggleState] = useState('');

  const toggle = () => {
    setToggleState(toggleState === 'side-nav' ? '' : 'side-nav');
  }

  return (
        <React.Fragment>
           <button className="nav-icon" onClick={toggle}>Menu</button> 
            <nav className={`navSection ${toggleState}`}>Nav Section</nav>
        </React.Fragment>
  );
}

export default NavBar;