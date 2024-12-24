// app/candidate-employer/page.tsx

import Link from "next/link";
import Image from "next/image";

const CandidateEmployerPage = () => {
  return (
    <div className="flex justify-center mt-6 gap-8 p-8">
      {/* Candidate Registration Card */}
      <div className="bg-white shadow-lg rounded-lg w-70 p-6">
        <h3 className="text-xl font-semibold text-red-900 text-center mb-4">Candidate Registration</h3>
        <p className="text-gray-700 mb-4">Register as a candidate to apply jobs.</p>
         <div className="flex justify-center items-center">
            <Image
            src="/images/candidateReg.jpg"
            alt="candidate registration"
            width={180}
            height={180}
            className="rounded-lg mb-8 transform hover:scale-105 transition-all"/>
        </div>

        <Link href="/auth/register">
          <button className="w-full bg-red-900 text-white py-2 px-2 rounded-lg transform hover:scale-105 transition-all">
            Register here
          </button>
        </Link>
      </div>

      {/* Employer Registration Card */}
      <div className="bg-white shadow-lg rounded-lg w-70 p-6">
        <h3 className="text-xl font-semibold text-red-900 text-center mb-4">Employer Registration</h3>
        <p className="text-gray-600 mb-4">Register as an employer to post jobs.</p>
        <div className="flex justify-center items-center">
            <Image
            src="/images/employerReg.png"
            alt="employer registration"
            width={200}
            height={200}
            className="rounded-lg mb-7 transform hover:scale-105 transition-all"/>
        </div>
        <Link href="/auth/employer-register">
          <button className="w-full bg-red-900 text-white py-2 px-2 rounded-lg transform hover:scale-105 transition-all">
            Register here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CandidateEmployerPage;
