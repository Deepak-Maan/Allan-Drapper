"use client"
import React, { useState } from 'react';
import CommonButton from '../common/Button';
import { EMAIL, PHONENUMBER } from '@/utils/Regex';
import FormValidationModal from '../common/FormValidationModal';
import Input from '../common/Input';

const FormValidation = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [newsletterOptIn, setNewsletterOptIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    console.log(fullName, email, phoneNumber)
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        if (!EMAIL.test(email)) {
            errors.email = 'Email address is invalid';
        } else {
            delete errors.email;
        }
        if (!fullName) {
            errors.fullName = 'Full Name is required';
        } else {
            delete errors.fullName;
        }
        if (!PHONENUMBER.test(phoneNumber)) {
            errors.phoneNumber = 'Phone Number must be 10 digits';
        } else {
            delete errors.phoneNumber;
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted successfully');
            console.log({ fullName, email, phoneNumber, message, newsletterOptIn });

            setFullName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            setNewsletterOptIn(false);

            setShowModal(true);
        }
    };

    return (
        <div className='xl:my-[120px] lg:my-24 md:my-16 sm:py-14 my-12'>
            <div className='max-w-[1160px] mx-auto px-3'>
                <div className='bg-gray lg:py-[88px] p-8 sm:p-12 md:p-20 lg:px-[110px]'>
                    <form className='lg:px-9 p-5 sm:p-8 lg:py-[41px] bg-white w-full' onSubmit={handleSubmit}>
                        <div className='flex items-center md:flex-row flex-col gap-3 sm:gap-4 w-full'>
                            <div className='w-full relative'>
                                <Input
                                    name="Full Name"
                                    type='text'
                                    className='md:max-w-[414px]'
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                {errors.fullName && <span className="text-red-500 absolute">{errors.fullName}</span>}
                            </div>
                            <div className='w-full relative '>
                                <Input
                                    name="Email Address"
                                    type='email'
                                    id="email"
                                    className='md:max-w-[414px]'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="text-red-500 absolute">{errors.email}</span>}
                            </div>
                        </div>
                        <div className='sm:pt-4 pt-3 relative'>
                            <Input
                                name="Phone Number"
                                type='number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {errors.phoneNumber && <span className="text-red-500 absolute">{errors.phoneNumber}</span>}
                        </div>
                        <div className='flex flex-col gap-[6.5px] mt-3 sm:mt-4'>
                            <p className='font-medium text-lg sm:text-xl md:text-2xl'>Message</p>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='w-full sm:max-h-[149px] min-h-[100px] max-h-[100px] sm:min-h-[149px] resize-none border border-solid border-black20 outline-none p-2 font-normal text-lg sm:text-xl md:text-2xl'
                            ></textarea>
                        </div>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 mt-3 sm:mt-5'>Opt In</p>
                        <label className="inline-flex items-center mt-1.5 sm:mt-[10.5px]">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                checked={newsletterOptIn}
                                onChange={(e) => setNewsletterOptIn(e.target.checked)}
                            />
                            <span className="ml-3 cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-black leading-130">Newsletter and Updates</span>
                        </label>
                        <div className='sm:pt-8 pt-5 md:pt-[46px]'>
                            <CommonButton text='CONNECT' type='submit' />
                        </div>
                    </form>
                </div>
            </div>
            <FormValidationModal show={showModal} onClose={() => setShowModal(false)} message="Form submitted successfully!" />
        </div>
    );
};

export default FormValidation;
