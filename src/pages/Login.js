import React from 'react';
import Template from '../components/Template';
import loginImg from "../assets/group.jpg";

const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proff your career."
      image={loginImg}
      formtype="Login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
