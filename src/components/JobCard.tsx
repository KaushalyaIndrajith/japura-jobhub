// components/JobCard.tsx
import React from 'react';

interface JobCardProps {
  position: string;
  company: string;
  duration: string;
  jobType: string;
  salary: string;
  requirements: string;
}

const JobCard: React.FC<JobCardProps> = ({
  position,
  company,
  duration,
  jobType,
  salary,
  requirements,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Job Title and Company */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
        <span className="text-sm text-gray-500">{company}</span>
      </div>

      {/* Job Details */}
      <div className="space-y-2 text-sm text-gray-600">
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Job Type:</strong> {jobType}</p>
        <p><strong>Salary:</strong> {salary}</p>
        <p><strong>Requirements:</strong> {requirements}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-4">
        <button className="bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-950 transition-all duration-200">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
