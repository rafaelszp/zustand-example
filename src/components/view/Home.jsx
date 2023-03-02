import React from 'react'

import {useUserStore} from "../store/UserStore";
import Login from './Login';
import Content from "./Content";

const Home = () => {
  const user = useUserStore((state)=>state.user);

  if(!user.logged)
    return (<Login/>)

  return (<Content/>)
}

export default Home;