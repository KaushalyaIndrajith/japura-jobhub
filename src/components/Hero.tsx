// components/Hero.tsx
'use client'
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contentData = [
    {
      image: '/images/home4.png',
      title: 'Welcome to Japura JobHub',
      description: 'Connecting graduates and employers seamlessly.',
    },
    {
      image: '/images/home2.png',
      title: 'Find Your Dream Job',
      description: 'Browse through thousands of job opportunities.',
    },
    {
      image: '/images/home3.png',
      title: 'Join the Best Employers',
      description: 'Hire talented graduates and build your team.',
    },
    {
      image: '/images/home6.png',
      title: 'Create a Profile Today',
      description: 'Sign up and connect with potential employers or employees.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 2000); // 5 seconds transition interval

    return () => clearInterval(interval);
  }, [contentData.length]); // Added contentData.length to the dependency array

  return (
    <section
      style={{
        backgroundImage: `url(${contentData[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh",
      }}
      className="relative"
    >
      <div className="flex flex-col justify-center items-center h-full text-center px-4 bg-black/50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          {contentData[currentIndex].title}
        </h1>
        <p className="text-lg md:text-xl mt-2 font-medium">
          {contentData[currentIndex].description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
