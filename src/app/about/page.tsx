import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-950 mb-4 tracking-tight">About Us</h2>
          <p className="text-lg text-white bg-red-900 mx-auto max-w-4xl px-9 py-8">
            The Department of Information and Communication Technology (ICT) at the Faculty of Humanities and Social Sciences
            (FHSS) is a hub for cultivating technological innovation and advancing digital literacy. Our department empowers
            students with the knowledge and skills to thrive in a rapidly evolving technological landscape.
          </p>
        </div>

        {/* Section 2: Purpose of the Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold text-red-950 mb-4">Why We Developed Japura JOBHUB</h3>
            <p className="text-1xl text-justify text-gray-700 mb-4">
              Japura JobHub was developed as a platform to bridge the gap between the talented graduates of the University
              of Sri Jayewardenepura and the local job market. Our goal is to create a streamlined experience where graduates
              can connect with potential employers, and employers can find skilled professionals ready to contribute to their
              organizations.
            </p>
            <p className="text-1xl text-justify text-gray-700">
              The website offers a dynamic interface with job listings, a platform for networking, and tools that help both
              job seekers and employers find the perfect match. It&rsquo;s a space for all alumni, employers, and job seekers to
              come together, making career connections easier than ever.
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <Image
              src="/images/mainJobHub.png"
              alt="Japura JobHub Platform"
              width={900}
              height={900}
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all"
            />
          </div>
        </div>

        {/* Section 3: Advantages of Japura JobHub */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-white mb-4">For Graduates</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Access to exclusive job opportunities from top employers.</li>
                <li className="mb-2">Connect with alumni and build your professional network.</li>
                <li className="mb-2">Stay updated with career events, internships, and workshops.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-white mb-4">For Employers</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Access to a pool of highly skilled graduates from diverse fields.</li>
                <li className="mb-2">Post job openings and internships directly to the platform.</li>
                <li className="mb-2">Network with university graduates and promote your organization.</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-2xl font-semibold text-white mb-4">For Alumni</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Reconnect with the university and other alumni.</li>
                <li className="mb-2">Offer mentorship or job opportunities to fresh graduates.</li>
                <li className="mb-2">Stay informed about alumni events and career-related updates.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: How to Join */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-red-950 mb-5">How to Join Japura JobHub</h3>
          <p className="text-base text-gray-700 mb-7">
            Joining Japura JobHub is easy! Whether you&rsquo;re a ungraduates, graduates, employer, or alumni, you can register for free and
            start exploring the platform&rsquo;s features.To join as a job seeker or alumni, click the &quot;Sign Up&quot; button and fill in your details. Once your account is
            verified, you can start browsing job listings, apply for jobs, and connect with other professionals.
            Employers can sign up to post job openings, search for suitable candidates, and create a company profile.
          </p>
          <Link
            href="/candidate-employer"
            className="px-6 py-3 mt-5 bg-red-900 text-white font-semibold rounded shadow-lg hover:bg-red-950 transition duration-300"
                    >Sign Up
          </Link>
        </div>

        {/* Section 5: Management and Support */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-red-950 mb-5">Managing Japura JobHub</h3>
          <p className="text-base text-gray-700 mb-4">
            Japura JobHub is managed by a dedicated team of students, faculty members, and alumni who continuously work
            to improve the platform and its services. We provide regular updates, maintain the database, and ensure the
            security of user information.
          </p>
          <p className="text-base text-gray-700">
            If you need any assistance or have feedback, feel free to reach out to our support team at{" "}
            <a href="mailto:support@japurajobhub.com" className="text-blue-400 hover:underline">
              support@japurajobhub.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
