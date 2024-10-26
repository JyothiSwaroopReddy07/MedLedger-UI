import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa'; 

const SignUp = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        role: 'RESIDENT' // Default role selection
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.fullname) newErrors.fullname = 'Full Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setErrorMessage('');
        setSuccessMessage('');

        if (validate()) {
            setIsSubmitting(true);
            try {
                // Make the signup request
                const response = await axios.post('http://localhost:8080/auth/register', {
                    name: formData.fullname,
                    username: formData.username,
                    password: formData.password,
                    type: formData.role,
                });
                setSuccessMessage('Signup successful!');
                setIsSubmitting(false);
                // Reset form
                setFormData({
                    fullname: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    role: 'RESIDENT'
                });
                window.location.href="/login";
            } catch (error) {
                setErrorMessage('Signup failed. Please try again.');
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="flex bg-gold items-center justify-center h-screen w-screen px-5 sm:px-0">
            <a href="/" className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-gray-900">
                <FaArrowLeft className="mr-2" /> {/* Back arrow icon */}
                <span className="text-sm font-semibold">Back to Home</span>
            </a>
            <form onSubmit={handleSubmit} className="flex bg-white rounded-lg shadow-lg border overflow-hidden w-3/4">
                <img
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    src={`${process.env.PUBLIC_URL}/SignUpBanner.webp`}
                    alt="logo"
                />
                <div className="w-full p-8 lg:w-1/2">
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Full Name</label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                        {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Username</label>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Password</label>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Re-enter Password</label>
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
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Role</label>
                        <select
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="RESIDENT">RESIDENT</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="PROGRAM_DIRECTOR">PROGRAM DIRECTOR</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <button
                            className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
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
