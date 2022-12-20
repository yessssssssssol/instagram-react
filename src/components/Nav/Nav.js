import React from 'react';
// import { Link } from 'react-router-dom';
import '../Nav/Nav.scss';
import '../../pages/Main/Main.scss';

const Nav = () => {
  return (
    <nav>
      <div id='navLeft'>
        <i className='fa-brands fa-instagram fa-xl'></i> <div>|</div>
        <p id='logo'>Westagram</p>
      </div>
      <div id='navCenter'>
        <input type='input' placeholder='검색' />
      </div>
      <div id='navRight'>
        {/* <img
        src=
          'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
      />
      <img
        src=
          'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
        
      />
      <img
        src=
          'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
      /> */}
      </div>
    </nav>
  );
};

export default Nav;
