import React from 'react'

const Login = () => {
  return (
    <div>
       <div className="bg-gray grid grid-cols-2 justify-start items-center bg-slate-300 h-screen w-screen">
        <div className="bg-banner h-full w-full bg-no-repeat bg-cover bg-center">
          <p className="absolute bottom-4 ml-48 text-white text-xl font-semibold w-56 tracking-wider">Building exceptional services with Back Office Support and Buisness Performance</p>
        </div>

        <div className="bg-white p-10 rounded-sm h-full w-full">
          <header>
            <h1 className="text-2xl mb-2 font-bold text-secondary">Create Account</h1>
            <p className="text-gray-400 mb-6">Build and exceptional business</p>
          </header>

          <form className="flex flex-col">
            <div className="grid grid-cols-2 gap-10 ">
              <div className="flex flex-col">
                <label className="text-xs" for='firstName'>First Name</label>
                <input className="text-gray text-lg outline-none border-b-2 border-gray-300 focus:border-secondary focus:text-secondary focus:font-semibold py-2 mb-5 w-full " autoComplete="off" type='text' id='firstName' name='firstName' placeholder="Enter your first name" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs" for='lastName'>Last Name</label>
                <input className="text-gray text-lg outline-none border-b-2 border-gray-300 focus:border-blue-900 py-2 mb-5 w-full " autoComplete="off" type='text' id='lastName' name='lastName' placeholder="Enter your last name" />
              </div>
            </div>
            <label className="text-xs" for='phoneNumber'>Phone Number</label>
            <input className="text-gray text-lg outline-none border-b-2 border-gray-300 focus:border-blue-900 py-2 mb-5 w-full " autoComplete="off" type='number' id='phoneNumber' placeholder="Enter your phone number" />

            <label className="text-xs" for='email'>Email Address</label>
            <input className="text-gray text-lg outline-none border-b-2 border-gray-300 focus:border-blue-900 py-2 mb-5 w-full " autoComplete="off" type='email' placeholder="Enter your email" />

            <label className="text-xs" for='password'>Password</label>
            <input className="text-gray text-lg outline-none border-b-2 border-gray-300 focus:border-blue-900 py-2 mb-5 w-full " autoComplete="off" type='password' id='password' placeholder="Enter your password" />

            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row justify-around items-center">
                <input className="mr-2" type='checkbox' id='remeber' />
                <label className="text-xs" for='remeber'>Remember me</label>
              </div>
              <div>
                <a href='#' className='text-btn-bg text-sm'>Forgot Password?</a>
              </div>
            </div>

            <button type='submit' className=" bg-btn-bg text-white text-center mb-4 w-full p-3 rounded-md">
              Sign Up
            </button>
          </form>
          <p className="text-center">Get an Account? <a href='#' className='text-btn-bg'> Sign in </a></p>
        </div>
      </div>

    </div>
  )
}

export default Login;
