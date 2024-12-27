import React from 'react';
// import frameImage from "../assets/12963-NP26X4.jpg"
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { FcGoogle } from 'react-icons/fc';

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='max-w-[1160px] flex justify-between w-11/12 py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'
        >
          {title}
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-white'>{desc1}</span>
            <span className='text-blue-300 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? 
        (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) :
        (<LoginForm setIsLoggedIn={setIsLoggedIn} />) }

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading-[1.37rem]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
          <FcGoogle fontSize="25"/>
            <p>Sign up with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        {/* <img 
          src={frameImage}
          alt="Pattern"
          style={{ width: "558px", height: "504px" }} 
          loading="lazy"        
        />         */}
        <img 
          src={image}
          alt="Group"
          style={{ width: "558px", height: "504px" }} 
          loading="lazy"
          className='absolute top-4 right-4'        
        />        
      </div>
    </div>
  );
}

export default Template;
