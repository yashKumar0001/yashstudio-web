import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';



const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6' >
        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-700'>*</sup></p>
            <input 
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                name='email'
                placeholder='Enter Email address'
                className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-700'>*</sup>
            </p>
            <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                name='password'
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <Link to="#">
            <p className='text-xs mt-1 text-blue-700 w-full ml-auto max-w-max'>Forgot Password</p>
        </Link>

        <button className='bg-yellow-300 rounded-[8px] text-richblack-900 font-medium px-[12px] py-[8px]'>
            Login In
        </button>

    </form>
  );
}

export default LoginForm;
