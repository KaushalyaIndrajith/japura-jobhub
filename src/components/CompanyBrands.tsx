"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CompanyBrands = () => {
  const [offset, setOffset] = useState(0);

  const logos = [
    "/images/companyBrands/aia.png",
    "/images/companyBrands/brandix.png",
    "/images/companyBrands/amreca.png",
    "/images/companyBrands/dialog1.png",
    "/images/companyBrands/unilever.png",
    "/images/companyBrands/ifs.png",
    "/images/companyBrands/mas.png",
    "/images/companyBrands/sce.jpeg",
    "/images/companyBrands/virtusa.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 1) % (logos.length * 150)); // Adjust logo width
    }, 20); // Speed of transition

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="overflow-hidden w-full py-4">
      <div
        className="flex items-center"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "transform 0.1s linear",
          whiteSpace: "nowrap",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            width={150}
            height={100}
            className="mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyBrands;
