import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

/*
// Link로 관리하는 방법
const Login = () => {
  return <Link to='/signup'>회원가입</Link>;
};

export default Login;
*/

// useNavigate hook 사용하는 방법

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <button className='loginBtn' onClick={goToMain}>
      로그인
    </button>
  );
};

export default Login;
