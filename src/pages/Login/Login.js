import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  const goToMain = () => {
    if (id.includes('@') && password.length >= 5) {
      fetch('http://10.58.52.67:3000/users')
        // fetch('http://10.58.52.174:3000/login')
        .then((response) => response.json())
        .then((data) => console.log(data));

      navigate('/main');
    } else {
      alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    }
  };

  const saveUserId = (e) => {
    setId(e.target.value);
  };
  const saveUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const validLogin = () => {
    return id.includes('@') && password.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const onForgetAlert = () => {
    alert('id에 @를 포함하고, 비밀번호는 5자리 이상 입력해보세요:)');
  };

  return (
    <div>
      <div id='loginForm'>
        <div id='title'>Instagram</div>
        <div id='loginInput'>
          <input
            id='loginId'
            placeholder='전화번호, 사용자 이름 또는 이메일'
            onChange={saveUserId}
            onKeyUp={validLogin}
            value={id}
          />
          <input
            id='loginPassword'
            placeholder='비밀번호'
            onChange={saveUserPassword}
            onKeyUp={validLogin}
            value={password}
          />
          <button
            type='button'
            onClick={goToMain}
            id={active ? 'loginedBtn' : 'loginBtn'}
            disabled={id === '' || password === '' ? true : false}
          >
            로그인
          </button>
        </div>
        <div id='forgetPassword' onClick={onForgetAlert}>
          비밀번호를 잊으셨나요?
        </div>
      </div>
      <script type='module' src='./js/login.js'></script>
    </div>
  );
};

export default Login;
