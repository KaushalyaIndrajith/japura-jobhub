"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Job {
  job_name: string;
  company_name: string;
  location: string;
  salary: string;
  job_type: string;
}

const JobList = () => {
  const searchParams = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const searchQuery = searchParams.get("searchQuery") || "";
      const jobType = searchParams.get("jobType") || "";

      try {
        const response = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchQuery, jobType }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [searchParams]);

  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div key={index} className="border bg-white p-4 rounded-md shadow-md mb-4">
            <h2 className="text-xl text-red-900 font-bold mb-3 ">{job.job_name}</h2>
            <p className="text-base text-gray-600">Company Name: {job.company_name}</p>
            <p className="text-base text-gray-600">Location: {job.location}</p>
            <p className="text-base text-gray-600">Salary: {job.salary}</p>
            <p className="text-base text-gray-600">Job Type: {job.job_type}</p>
            <button className="bg-red-900 text-white px-4 py-1 rounded-md hover:bg-red-950 mt-3">Apply Now</button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No jobs found. Try another search.</p>
      )}
    </div>
  );
};

const JobsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <Suspense fallback={<p>Loading jobs...</p>}>
        <JobList />
      </Suspense>
    </div>
  );
};

export default JobsPage;
