import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler (event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        console.log("AccountData",accountData);        
        navigate("/dashboard");
    }

  return (
    <div>
      {/* studen-Instructor tab  */}
      <div className='text-white mt-3 flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max my-6'>
        <button 
        className={`${accountType === "student" ? "bg-richblack-900 text-white" : "bg-transparent text-gray-700"} transition-all duration-200 rounded-full py-2 px-5`}
        onClick={() => setAccountType("student")}>
            Student
        </button>
        <button 
        className={`${accountType === "instructor" ? "bg-richblack-900 text-white" : "bg-transparent text-gray-700"} transition-all duration-200 rounded-full py-2 px-5`}
        onClick={() => setAccountType("instructor")}>
            Instructor
        </button>
      </div>

      <form 
      className='flex flex-col w-full gap-y-4 mt-6'
      onSubmit={submitHandler}>
        <div className='flex gap-x-4'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-700'>*</sup></p>
                <input
                    required
                    type='text'
                    name='firstName'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstName}
                    className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-700'>*</sup></p>
                <input
                    required
                    type='text'
                    name='lastName'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formData.lastName}
                    className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
                />
            </label>
        </div>
        <label>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-700'>*</sup></p>
                <input
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
                />
        </label>

        <div className='flex gap-x-4'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-700'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-700'>*</sup></p>
                    <input
                        required
                        type={showPassword2 ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword2((prev) => !prev)}>
                        {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>
        </div>
        <button className='font-medium bg-yellow-300 border border-richblack-700 rounded-[8px] px-[12px] py-[8px]'>
            Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
