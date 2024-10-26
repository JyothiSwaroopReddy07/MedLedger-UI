import React from 'react'

const Login = () => {
  return (
    <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
    <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
      <img
        className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
        src={`${process.env.PUBLIC_URL}/logo.webp`}
        alt="logo"
      />
      <div className="w-full p-8 lg:w-1/2">
        <div className="mt-4">
        <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
          </div>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="email"
            required
          />
        </div>
        <div className="mt-4 flex flex-col justify-between">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
          </div>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="password"
          />
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
          >
            Forget Password?
          </a>
        </div>
        <div className="mt-8">
          <button className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            Login
          </button>
        </div>
        <div className="mt-4 flex items-center w-full text-center">
          <a
            href="/"
            className="text-xs text-gray-500 capitalize text-center w-full"
          >
            Don&apos;t have any account yet?
            <span className="text-blue-700"> Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
