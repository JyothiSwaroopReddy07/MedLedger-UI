import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
    <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm w-1/2">
      <div className="w-full p-8">
        <div className="mt-4 flex flex-col justify-between">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
          </div>
          <input
            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
            type="email"
          />
          
        </div>
        <div className="mt-8">
          <button className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword
