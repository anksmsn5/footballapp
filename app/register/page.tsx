"use client";
import React, { useState } from 'react';
import styles from '../styles/Register.module.css';
import '../globals.css'; // Import CSS module
import Header from '../components/header';
import Brand from '../public/images/brand.jpg'
import Image from 'next/image';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header></Header>

    <div className="flex">
      <div className="w-1/2  justify-center bg-white-500 p-4">
      <div className="bg-white rounded-lg p-12 max-w-md w-full automargin">
        <h2 className="text-2xl font-bold mb-6 text-left">Create Account</h2>
        <form>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
      </div>
      <div className="w-1/2 bg-white-500">
        <Image src={Brand}/>
      </div>
    </div>
    </>
  );
};

export default Register;
