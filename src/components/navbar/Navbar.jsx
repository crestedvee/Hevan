import "./navbar.scss"
import { useState } from "react";
import { Link } from 'react-router-dom';
import DropDownMenu from '../dropdown/DropDownMenu';

const Navbar = () => {

  const openMenu = () => {
    setOpen((prev) => !prev)
  }
  const [open, setOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const openDropDown = () => {
    setDropdownVisible(true);
  }

  const closeDropDown = () => {
    setDropdownVisible(false);
  }

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={require("../../assets/hlogo.png")} alt="logo" />
          <span>Authentic Nigeria Flavours</span>
        </a>
        <Link to='/home' as={Link}>Home</Link>
        <Link to='/about' as={Link}>About</Link>
        <Link to='/gallery' as={Link}>Gallery</Link>
        <Link to='/contact' as={Link}>Contact</Link>
      </div>
      <div className="right">
        <div className="menuDiv">
          <div className="dropdown" onMouseLeave={closeDropDown}>
            {/* <DropdownMenu /> */}
            {isDropdownVisible && <DropDownMenu />}
          </div>
          <button onMouseEnter={openDropDown} className="mainBtn">Order</button>
        </div>
        <Link to='/signIn' as={Link} className="signUp">Sign In</Link>
        <Link to='/signUp' as={Link} className="signUp">Sign Up</Link>
        <div className="menuIcon" onClick={openMenu}>
          <img src={require('../../assets/menuIcon.png')} alt="menuIcon" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to='/home' as={Link}>Home</Link>
          <Link to='/about' as={Link}>About</Link>
          <Link to='/gallery' as={Link}>Gallery</Link>
          <Link to='/contact' as={Link}>Contact</Link>
          <Link to='/signIn' as={Link} className="signUp">Sign In</Link>
          <Link to='/signUp' as={Link} className="signUp">Sign Up</Link>
          <div className="menuDiv">
            <div className="dropdown" onMouseLeave={closeDropDown}>
              {/* <DropdownMenu /> */}
              {isDropdownVisible && <DropDownMenu />}
            </div>
            <button onMouseEnter={openDropDown}>Order</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;