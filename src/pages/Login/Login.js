import React from 'react';
import './Login.scss';

const Login = () => {
  // const LoginValid = () => {
  //   if ()
  // }
  return (
    <div>
      <div id='loginForm'>
        <div id='title'>westagram</div>
        <div id='loginInput'>
          <input id='loginId' placeholder='전화번호, 사용자 이름 또는 이메일' />
          <input id='loginPassword' placeholder='비밀번호' />
          <button type='button' id='loginBtn'>
            로그인
          </button>
        </div>
        <div id='forgetPassword'>비밀번호를 잊으셨나요?</div>
      </div>
      <script type='module' src='./js/login.js'></script>
    </div>
  );
};

export default Login;
