import React from 'react'

const SignUp = () => {
    return (
        <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden w-3/4">
                <img
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    src={`${process.env.PUBLIC_URL}/SignUpBanner.webp`}
                    alt="logo"
                />
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-3xl text-gray-600 text-center font-pacifico font-bold">MEDLEDGER</p>
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
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                UserName
                            </label>
                        </div>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="text"
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
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Re Enter Password
                            </label>
                        </div>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                        />
                    </div>
                    <div className="mt-8">
                        <button className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                            SignUp
                        </button>
                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                        <a
                            href="/"
                            className="text-xs text-gray-500 capitalize text-center w-full"
                        >
                            Already have an account?
                            <span className="text-blue-700"> Login</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
