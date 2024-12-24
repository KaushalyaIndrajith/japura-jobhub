"use client";

import React from "react";
import { FaChartLine, FaUser, FaBriefcase, FaPhone, FaBookmark, FaPen, FaBell, FaLightbulb } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import Image from "next/image";

const StudentsDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4 flex items-center space-x-4 border-b">
                    <Image
                        src="/images/student-profile.png"
                        alt="User Avatar"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-lg text-black font-base">Your Name</h2>
                        <p className="text-sm text-gray-500">Undergraduate</p>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-6 text-gray-700">
                    <a href="#" className="flex items-center space-x-2 text-green-600 font-medium">
                        <FaChartLine />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaUser />
                        <span>My Profile</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <HiOutlineDocumentText />
                        <span>My Applications</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaPen />
                        <span>Submit Job</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaBookmark />
                        <span>Saved Jobs</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FiSettings />
                        <span>Account Settings</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-800">
                        <FiLogOut />
                        <span>Logout</span>
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-center text-gray-800">
                        Candidate Dashboard
                    </h1>
                    <div className="flex space-x-4">
                        <button className="relative text-gray-700 hover:text-red-900">
                            <FaBell size={22} />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                                3
                            </span>
                        </button>
                        <button className="flex items-center space-x-2 bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-950 transition">
                            <IoCreateOutline size={20} />
                            <span>Create CV</span>
                        </button>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {[ 
                        { title: "Applied Jobs", value: "07", icon: <FaBriefcase /> },
                        { title: "Interview Called Jobs", value: "03", icon: <FaPhone /> },
                        { title: "Saved Jobs", value: "1.7k", icon: <FaBookmark /> },
                        { title: "Matching Opportunities", value: "04", icon: <FaLightbulb /> },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center p-4 bg-white shadow rounded-md space-x-4"
                        >
                            <div className="p-3 bg-green-100 rounded-full text-green-600 text-xl">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-lg text-black font-semibold">{item.value}</p>
                                <p className="text-sm text-gray-700">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Matching Opportunities Description */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Matching Job Opportunities
                    </h3>
                    <p className="text-gray-600">
                        Based on your preferences and qualifications, we have tailored job opportunities
                        that match your career goals. Regularly update your profile to see better matches.
                    </p>
                </div>

                {/* Applied Jobs Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Applied Jobs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[ 
                            { title: "Web Developer", company: "Tech Innovators Inc.", salary: "$60,000/year", date: "2024-06-10", applicants: "45" },
                            { title: "Data Analyst", company: "Insight Analytics Co.", salary: "$55,000/year", date: "2024-06-08", applicants: "30" },
                            { title: "UI/UX Designer", company: "Creative Minds Ltd.", salary: "$50,000/year", date: "2024-06-05", applicants: "70" },
                        ].map((job, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
                            >
                                {/* Job Title */}
                                <h4 className="text-base font-semibold text-center text-gray-800 mb-2">{job.title}</h4>
                                {/* Company Name */}
                                <p className="text-gray-500 text-sm mb-2">
                                    <span className="font-semibold text-gray-600">Company:</span> {job.company}
                                </p>
                                {/* Salary */}
                                <p className="text-gray-500 text-sm mb-2">
                                    <span className="font-semibold text-gray-600">Salary:</span> {job.salary}
                                </p>
                                {/* Apply Date and Applicants */}
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">Applied:</span> {job.date}
                                    </p>
                                    <div className="text-green-600 font-semibold text-sm">
                                        {job.applicants} Applicants
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsDashboard;
