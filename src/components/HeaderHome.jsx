import React from 'react';
import Logo from '../img/logo.svg';

function HeaderHome() {
  return (
    <header>
      <div className="container header">
        <div>
          <img src={Logo} alt="Logo Corelab" />
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
