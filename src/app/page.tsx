import React from "react";
import SearchBar from "../components/SearchBar";
import CompanyBrands from "@/components/CompanyBrands";
import Link from "next/link";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <div>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="">
          <Hero/>
        </section>

        {/* Search Bar Section */}
        <section className=" max-w-5xl mx-auto mb-0 mt-5 py-10 px-2">
          <SearchBar />
        </section>

        {/* Explore Opportunities Section */}
        <section className="py-2 px-4 mt-0 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            Explore Opportunities
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Find Jobs
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Browse job opportunities tailored for graduates.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Post Jobs
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Employers can find top talent from the university.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Build Your Profile
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Showcase your skills and stand out to employers.
              </p>
            </div>
          </div>
        </section>

        {/*CompanyBrand component*/}
        <section className =" max-w-5xl mx-auto mt-5 py-8 px-2">
        <CompanyBrands/>
        </section>

        {/* Call to Action Section */}
        <section className="py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join Japura JobHub today and take the next step in your career.
          </p>
          <Link
            href="/candidate-employer-login"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-100 transition duration-300"
                    >Join Now
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
