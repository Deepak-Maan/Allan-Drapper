"use client";
import React, { useState } from "react";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    optIn: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = {};

    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    // Email Validation
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = "Invalid Email Address";
      valid = false;
    }

    // Phone Validation
    if (!formData.phone.trim() || formData.phone.length !== 10) {
      newErrors.phone = "Invalid Phone Number";
      valid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    if (name === "phone" && inputValue.length > 10) return; // Restrict phone input to 10 digits

    setFormData({
      ...formData,
      [name]: inputValue,
    });

    // Clear error message for the field being edited if valid
    let newErrors = { ...errors };
    if (name === "fullName" && value.trim()) {
      newErrors.fullName = "";
    }
    if (name === "email" && value.includes('@')) {
      newErrors.email = "";
    }
    if (name === "phone" && value.length === 10) {
      newErrors.phone = "";
    }
    if (name === "message" && value.trim()) {
      newErrors.message = "";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Clear form fields
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        optIn: false,
      });
      setErrors({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="lg:my-[120px] md:my-20 sm:my-16 my-12">
      <div className="max-w-[1148px] mx-auto px-3">
        <form onSubmit={handleSubmit}>
          <div className="bg-gray py-[88px] px-[110px]">
            <div className="px-9 py-[41px] bg-white w-full">
              <div className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <CommonInput
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="max-w-[414px]"
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div className="w-full">
                  <CommonInput
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="max-w-[414px]"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="pt-4">
                <CommonInput
                  name="phone"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col gap-[6.5px] mt-4">
                <p className="font-medium text-lg sm:text-xl md:text-2xl">
                  Message
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full max-h-[149px] min-h-[149px] resize-none border border-solid border-black20 outline-none p-2 font-normal text-lg sm:text-xl md:text-2xl"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <p className="font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 mt-5">
                Opt In
              </p>
              <label className="inline-flex items-center mt-[10.5px]">
                <input
                  type="checkbox"
                  name="optIn"
                  checked={formData.optIn}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-3 cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-black leading-130">
                  Newsletter and Updates
                </span>
              </label>
              <div className="pt-[46px]">
                <CommonButton text="CONNECT" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
