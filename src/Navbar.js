import { Link } from 'react-router-dom';
import React, { useState } from "react"
// import storeIcon from './icon/07.png';
// import aboutIcon from './icon/01.png';
// import artistsIcon from './icon/02.png';
// import exhibitionsIcon from './icon/05.png';
import { Divide as Hamburger } from 'hamburger-react'

// const [navbarOpen, setNavbarOpen] = useState(false)



const  Navbar = () => {
  return (  
    <>
    <nav className="navbar">
      <h1 className="flash"><Link to="/">thunderstruck</Link></h1>
      {/* &nbsp;
      <p>collective</p> */}
      <div className="links">
        {/* <Link to="/about">
        <img
          src={aboutIcon}
          width="30"
          height="30"
          className="changeColor"
          alt="TS About logo"
        />
        </Link>
        <Link to="/artists">
        <img
          src={artistsIcon}
          width="30"
          height="30"
          className="changeColor"
          alt="TS Artists logo"
        />
        </Link>
        <Link id="icon" to="/exhibitions">
        <img
          src={exhibitionsIcon}
          width="30"
          height="30"
          className="changeColor"
          alt="TS Exhibitions logo"
        />
        </Link>
        <Link to="/store">
        <img
          src={storeIcon}
          width="30"
          height="30"
          className="changeColor"
          alt="TS Store logo"
        />
        </Link> */}
        <Hamburger 
        easing="ease-in"
        size={25}
        label="Show menu"
        hideOutline={false}
        onToggle={toggled => {
          if (toggled) {
            // open a menu
          } else {
            // close a menu
          }
        }} />

        {/* <Link to="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link> */}
      </div>
    </nav>
    </>
  );
}

export default Navbar;