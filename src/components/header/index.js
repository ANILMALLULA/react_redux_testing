import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo192.png";

function Header(props) {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='Logo Img' />
        </div>
      </div>
    </header>
  );
}

export default Header;
