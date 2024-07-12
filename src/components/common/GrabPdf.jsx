"use client"
import React, { useState, useEffect } from 'react';
import { H2 } from './Heading';
import CommonButton from './Button';

const GrabPdf = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setName('');
            setEmail('');
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            console.log('Form submitted:', { name, email });
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='bg-grabPdf bg-no-repeat bg-cover bg-darkGray py-12 sm:py-16 md:py-20 lg:py-[115px]'>
            <div className="container mx-auto px-3">
                <H2 heading="Grab Your Free PDF Now" className="text-white after:hidden text-center" />
                <p className='text-white font-medium text-base leading-130 pt-3 max-w-[485px] text-center pb-8 mx-auto'>
                    The complete entrepreneur’s guide to building a successful business. Sign up with your email address to receive weekly resources and tips to help scale your business.
                </p>
                <div className='max-w-[330px] mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input
                                id='name'
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`border border-offGray text-base leading-150 h-[50px] font-normal px-4 py-2 text-offGray bg-darkGray w-full placeholder:text-offGray focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className='mb-3'>
                            <input
                                id='email'
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`border mt-3 border-offGray text-base leading-150 h-[50px] font-normal px-4 py-2 text-offGray bg-darkGray w-full placeholder:text-offGray focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <CommonButton text='START NOW' className="w-full mt-8" />
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 flex items-center justify-center h-[100px]  rounded shadow-lg relative">
                        <button
                            className="absolute top-0 right-0 pr-2"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <p className='text-base font-normal text-offGray'>Your email is received</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GrabPdf;
