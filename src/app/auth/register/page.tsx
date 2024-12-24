"use client";

import { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    academicYear: "",
    faculty: "",
    department: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          birthday: new Date(formData.birthday),
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const errorData = await res.json(); // Retrieve error details if available
        console.error("Error:", errorData.error || "Registration failed.");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-900">
          Candidate Registration
        </h2>

        {/* Success Message */}
        {success === true && (
          <div className="flex flex-col items-center justify-center p-4 bg-green-100 border border-green-400 rounded-md mb-4 text-green-800">
            <svg
              className="w-10 h-10 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <circle cx="10" cy="10" r="8" className="text-green-800" />
              <path
                d="M6 10l3 3 5-5"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg font-semibold">Registration Successful!</p>
            <Link
              href="/auth/login"
              className="mt-2 text-blue-600 underline hover:text-blue-800"
            >
              Login Now
            </Link>
          </div>
        )}

        {/* Failure Message */}
        {success === false && (
          <div className="flex flex-col items-center justify-center p-4 bg-red-100 border border-red-400 rounded-md mb-4 text-red-800">
            <svg
              className="w-10 h-10 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.414-4.828a1 1 0 111.414 1.414L6.586 10.586a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L8 9.414l2.586 2.586z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg font-semibold">Registration Failed!</p>
            <Link
              href="/auth/register"
              className="mt-2 text-blue-600 underline hover:text-blue-800"
            >
              Try Again
            </Link>
          </div>
        )}

        {/* Registration Form */}
        {!success && (
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <label className="block text-gray-700 mb-2">
              Full Name
              <input
                name="fullName"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Academic Year
              <input
                name="academicYear"
                placeholder="e.g., 2021/2022"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Faculty
              <select
                name="faculty"
                onChange={handleChange}
                className="input-style"
                required
              >
                <option value="">Select Faculty</option>
                <option value="fhss">Faculty of Humanities and Social Sciences</option>
                <option value="fas">Faculty of Applied Sciences</option>
                <option value="fmsc">Faculty of Management Studies and Commerce</option>
                <option value="fms">Faculty of Medical Sciences</option>
                <option value="fgs">Faculty of Graduate Studies</option>
                <option value="fot">Faculty of Technology</option>
                <option value="foe">Faculty of Engineering</option>
                <option value="fahs">Faculty of Allied Health Sciences</option>
                <option value="fds">Faculty of Dental Sciences</option>
                <option value="fuab">Faculty of Urban and Aquatic Bioresources</option>
                <option value="foc">Faculty of Computing</option>
              </select>
            </label>
            <label className="block text-gray-700 mb-2">
              Department
              <input
                name="department"
                placeholder="e.g., Department of ICT"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Birthday
              <input
                name="birthday"
                type="date"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Phone Number
              <input
                name="phoneNumber"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Email
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <label className="block text-gray-700 mb-2">
              Password
              <input
                name="password"
                type="password"
                onChange={handleChange}
                className="input-style"
                required
              />
            </label>
            <button
              type="submit"
              className="btn-submit transition-transform transform hover:scale-105"
            >
              Register
            </button>
          </form>
        )}


      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 8px;
          margin-top: 4px;
          margin-bottom: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .btn-submit {
          width: 100%;
          background-color: #7f1d1d;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-submit:hover {
          background-color: #742a2a;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
