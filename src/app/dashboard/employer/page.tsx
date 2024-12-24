"use client";

import React from "react";
import { FaUser, FaBookmark, FaEye, FaPen, FaChartLine } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Image from "next/image";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EmployerDashboard = () => {
    // Line Chart Data
    const lineChartData = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Job Views",
                data: [50, 100, 300, 200, 250, 150, 100],
                borderColor: "rgba(34, 197, 94, 1)",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col">
                <div className="p-4 flex items-center space-x-4 border-b">
                    <Image
                        src="/images/employer-profile.png"
                        alt="User Avatar"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-lg text-black font-base">Your Name</h2>
                        <p className="text-sm text-gray-500">Employer</p>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-6 text-gray-700">
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-green-600 font-medium"
                    >
                        <FaChartLine />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaUser />
                        <span>My Profile</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <HiOutlineDocumentText />
                        <span>My Jobs</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaPen />
                        <span>Submit Job</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FaBookmark />
                        <span>Save Candidate</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:text-green-600">
                        <FiSettings />
                        <span>Account Settings</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-800"
    >                   <FiLogOut />
                        <span>Logout</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-center text-gray-800">Employer Dashboard</h1>
                    <div className="flex space-x-4">
                        <input
                            type="search"
                            placeholder="Search here..."
                            className="border p-2 rounded-md w-72"
                        />
                        <button className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-950">
                            Post a Job
                        </button>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {[
                        { title: "Posted Job", value: "07", icon: <FaUser /> },
                        { title: "Shortlisted", value: "03", icon: <FaBookmark /> },
                        { title: "Applications", value: "1.7k", icon: <FaEye /> },
                        { title: "Save Candidate", value: "04", icon: <FaPen /> },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center p-4 bg-white shadow rounded-md space-x-4"
                        >
                            <div className="p-3 bg-green-100 rounded-full text-green-700 text-xl">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-lg text-black font-semibold">{item.value}</p>
                                <p className="text-sm text-gray-500">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Job Views and Posted Jobs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Line Chart */}
                    <div className="col-span-2 bg-white p-6 shadow rounded-md">
                        <h2 className="text-lg text-black text-center font-semibold mb-4">Job Views</h2>
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>

                    {/* Posted Jobs */}
                    <div className="bg-white p-6 shadow rounded-md">
                        <h2 className="text-lg text-black text-center font-semibold mb-4">Posted Jobs</h2>
                        <ul className="space-y-3">
                            {[
                                { title: "Web & Mobile Prototype", location: "Fulltime . Colombo" },
                                { title: "Document Writer", location: "Part-time . Kandy" },
                                { title: "Outbound Call Service", location: "Fulltime . Gampaha" },
                                { title: "Product Designer", location: "Part-time . Galle" },
                                { title: "Marketing Specialist", location: "Part-time . Negambo" },
                            ].map((job, idx) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center text-gray-700"
                                >
                                    <span>
                                        <h2 className="text-base text-black">{job.title}</h2>
                                        <p className="text-sm text-gray-500">{job.location}</p>
                                    </span>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        &#x22EE;
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmployerDashboard;
