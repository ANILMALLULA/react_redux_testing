import React from "react";
import "./styles.scss";
import Logo from "../../assets/logo192.png";

function Header(props) {
  return (
    <header data-test="headerComponent">
      <div className='wrap'>
        <div className='logo'>
          <img data-test="logoIMG" src={Logo} alt='Logo Img' />
        </div>
      </div>
    </header>
  );
}

export default Header;
