import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, auth } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [registerError, setRegisterError] = useState('');
  const [mgssuccess, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const [value, setValue] = useState('');

  const [alemail, setAlEmail] = useState('');
  const [alpassword, setAlPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the checkbox is not accepted
    const accepted = e.target.myCheckbox.checked;

    if (!accepted) {
      toast.error('You must accept the terms and conditions');
      return;
    }

    // Continue with the login process
    if (alemail && alpassword) {
      signIn(alemail, alpassword)
        .then(result => {
          toast.success('Login Successful');
          setSuccess(result);
          navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  };

  const forgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error('Please enter the email address');
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      toast.error('Please validate the email address');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Password reset email sent. Please check your email.');
      })
      .catch((error) => {
        toast.error('Something went wrong');
      });
  };

  const googleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setValue(res);
        if (res.user) {
          // Successful login with Google, redirect to the root page
          navigate('/');
        } else {
          // Login with Google was not successful, stay on the login page
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center relative mx-10 rounded'
      style={{
        backgroundImage: "url('https://i.ibb.co/GJ5wNQX/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div
        className='max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-lg relative'
        style={{
          zIndex: 1,
        }}
      >
        <h2 className='text-3xl font-bold text-center'>Login Here</h2>
        <form onSubmit={handleLogin}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              onChange={(e) => setAlEmail(e.target.value)}
              type='email'
              name='email'
              ref={emailRef}
              placeholder='Email'
              className='input input-bordered w-full'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <div className='relative'>
              <div className='w-full'>
                <input
                  onChange={(e) => setAlPassword(e.target.value)}
                  type={!showPassword ? 'password' : 'text'}
                  name='password'
                  placeholder='Password'
                  className='input input-bordered w-full'
                  required
                />
              </div>
              <span
                className='cursor-pointer absolute top-4 text-lg right-2'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <div>
              <a onClick={forgetPassword} className='my-2 text-blue-500' href='#'>
                Forget Password ?
              </a>
            </div>
          </div>
          <div className='flex gap-3 my-3'>
            <input type='checkbox' id='myCheckbox' />
            <label htmlFor='myCheckbox'>Accept Our Terms and Condition </label>
          </div>
          <button type='submit' className='btn btn-accent text-white w-full'>
            Login
          </button>
        </form>
        <div className='text-red-600'>{registerError}</div>
        <div className='text-green-600'>{mgssuccess}</div>
        <div className='text-center'>
          Do not have an Account?{' '}
          <NavLink to={'/register'} className='text-blue-500'>
            Register
          </NavLink>
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <h2>Login With </h2>
          <h2 className='text-2xl'>
            {value?.user ? (
              <Link to={'/login'}>
                <a onClick={googleSignin} className='text-blue-500' href=''>
                  Google
                </a>
              </Link>
            ) : (
              <Link to={'/login'}>
                <a onClick={googleSignin} className='text-blue-500' href=''>
                  Google
                </a>
              </Link>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
