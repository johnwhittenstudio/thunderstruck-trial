import { Link } from 'react-router-dom';
import storeIcon from './icon/07.png';
import aboutIcon from './icon/01.png';
import artistsIcon from './icon/02.png';
import exhibitionsIcon from './icon/05.png';

const  Navbar = () => {
  return (  
    <nav className="navbar">
      <h1><Link to="/">thunderstruck</Link></h1>
      <div className="links">
        <Link to="/about">
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
        </Link>

        {/* <Link to="/create" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;