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
    if (response.message === 'valid user') {
      navigate('/main');
    } else {
      alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
      navigate('/signup');
    }
  };

  return (
    <button className='loginBtn' onClick={goToMain}>
      로그인
    </button>
  );
};

export default Login;
