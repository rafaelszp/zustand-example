import React from 'react';
import {useUserStore} from '../store/UserStore';

const Content = () => {

  const {user,logout,getUserInfo,userInfo} = useUserStore((state)=>state);

  return (
    <>
      <p>
        Welcome {user.login} :)
      </p>
      <p>
        <button onClick={() => logout()} >Logout</button>
      </p>
      <p>
        <a href="#" onClick={()=>getUserInfo()}>Get user Info:</a> { userInfo ? userInfo.name : '' }
      </p>
    </>
  );
};

export default Content;
