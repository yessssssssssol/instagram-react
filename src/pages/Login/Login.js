import React from 'react';

const Login = () => {
  // const LoginValid = () => {
  //   if ()
  // }
  return (
    <div className='LoginForm'>
      <h1 className='logo'>westagram</h1>
      <div>
        <article>
          <input
            className='InputForm'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input className='InputForm' placeholder='비밀번호' />
        </article>
        <article>
          <button type='button'>로그인</button>
        </article>
      </div>
    </div>
  );
};

export default Login;
