import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Nav/Nav.scss';
import '../../pages/Main/Main.scss';

const Nav = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <nav>
      <div id='navLeft'>
        <i className='fa-brands fa-instagram fa-xl'></i> <div>|</div>
        <button id='logo' onClick={goToHome}>
          Instagram
        </button>
      </div>
      <div id='navCenter'>
        <input type='input' placeholder='검색' />
      </div>
      <div id='navRight'>
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
          alt='explore'
        />
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
          alt='heart'
        />
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
          alt='profile'
        />
      </div>
    </nav>
  );
};

export default Nav;
