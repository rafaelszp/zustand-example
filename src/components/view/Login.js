import React from 'react';
import {useUserStore} from '../store/UserStore';

const Login = () => {

  const login=useUserStore((state)=>state.login);

  return (
    <>
      <p> You're not logged in</p>
      <button onClick={()=>login({logged: true, login: 'rafael'})} > Login</button>
    </>
  );
};

export default Login;
