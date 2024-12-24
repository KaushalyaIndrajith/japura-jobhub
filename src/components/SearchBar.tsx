"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const router = useRouter(); // Use Next.js router

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery && !jobType) {
      alert("Please enter a search term or select a job type.");
      return;
    }

    // Navigate to /jobs with query parameters
    router.push(`/jobs?searchQuery=${encodeURIComponent(searchQuery)}&jobType=${encodeURIComponent(jobType)}`);
  };

  return (
    <section className="bg-white py-6 px-4 shadow-md rounded-md relative -top-8">
      <form
        onSubmit={handleSearch}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center"
      >
        {/* Search Job/Keywords Input */}
        <div className="flex-1 w-full sm:w-auto">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700"
          >
            Search Jobs/Keywords
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g. Software Developer, UI Designer"
            className="mt-2 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-800 focus:outline-none text-black placeholder-gray-400"
          />
        </div>

        {/* Job Type Dropdown */}
        <div className="flex-1 w-full sm:w-auto">
          <label
            htmlFor="jobType"
            className="block text-sm font-medium text-gray-700"
          >
            Job Type
          </label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-800 focus:outline-none placeholder-gray-400 text-black"
          >
            <option value="" disabled className="text-gray-400">
              Select Job Type
            </option>
            <option value="internship" className="text-black">
              Internship
            </option>
            <option value="part-time" className="text-black">
              Part Time
            </option>
            <option value="full-time" className="text-black">
              Full Time
            </option>
            <option value="hybrid" className="text-black">
              Hybrid
            </option>
            <option value="work-from-home" className="text-black">
              Work from Home
            </option>
          </select>
        </div>

        {/* Search Button */}
        <div className="self-end w-full sm:w-auto">
          <button
            type="submit"
            className="bg-red-900 text-white py-2 px-6 rounded-md hover:bg-red-800 w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
