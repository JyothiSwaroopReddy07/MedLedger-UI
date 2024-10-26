import React, { useState } from 'react';

const SignUp = () => {
    // Form state
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        if (validate()) {
            setIsSubmitting(true);
            // Mock API call (replace this with actual signup API call)
            setTimeout(() => {
                console.log('User signed up:', formData);
                setIsSubmitting(false);
                // Reset form
                setFormData({
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: ''
                });
            }, 2000);
        }
    };

    return (
        <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
            <form onSubmit={handleSubmit} className="flex bg-white rounded-lg shadow-lg border overflow-hidden w-3/4">
                <img
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    src={`${process.env.PUBLIC_URL}/SignUpBanner.webp`}
                    alt="logo"
                />
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-3xl text-gray-600 text-center font-pacifico font-bold">MEDLEDGER</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">UserName</label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Re Enter Password</label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                    </div>
                    <div className="mt-8">
                        <button
                            className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                        <a href="/" className="text-xs text-gray-500 capitalize text-center w-full">
                            Already have an account?
                            <span className="text-blue-700"> Login</span>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
