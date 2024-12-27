import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img className='text-white' style={{width: 160, height: 32}} loading="lazy" src={logo} alt='logo'/>
      </Link>
      <nav>
        <ul className='flex gap-x-6 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard  */}
      <div className='flex gap-4 items-center text-white'>
        { !isLoggedIn &&
          <Link to="/login">
            <button className='bg-richblack-800 py-[8px] rounded-[8px] px-[12px] border border-richblack-700'>Login</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className='bg-richblack-800 py-[8px] rounded-[8px] px-[12px] border border-richblack-700'>Sign up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button className='bg-richblack-800 py-[8px] rounded-[8px] px-[12px] border border-richblack-700'
              onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-richblack-800 py-[8px] rounded-[8px] px-[12px] border border-richblack-700'>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
