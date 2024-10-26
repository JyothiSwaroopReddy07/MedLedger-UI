import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 

const OurMission = () => {
  return (
    <section className="bg-white py-24 px-6 sm:px-8 lg:px-12">
        <a href="/" className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-gray-900">
                <FaArrowLeft className="mr-2" /> {/* Back arrow icon */}
                <span className="text-sm font-semibold">Back to Home</span>
        </a>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-900 sm:text-5xl">Our Mission</h1>
        <p className="mt-6 text-lg text-gray-700 leading-7">
          At MedLedger, we are dedicated to revolutionizing medical competency tracking and verification to build a future where healthcare professionals and institutions trust, streamline, and access verified credentials instantly and securely.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-16">
        {/* Vision Section */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-600">Our Vision</h2>
          <p className="mt-4 text-gray-700 leading-6">
            We envision a healthcare system where every medical professional’s skills and competencies are accessible, verifiable, and trusted. By providing a secure platform for digital credentials, we aim to empower institutions to make informed hiring decisions and advance medical education.
          </p>
        </div>

        {/* Purpose Section */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-600">Our Purpose</h2>
          <p className="mt-4 text-gray-700 leading-6">
            MedLedger exists to bridge the gap between medical institutions and professionals by eliminating the inefficiencies of traditional competency tracking. Our purpose is to support institutions in transitioning to a competency-based training model, ultimately enhancing healthcare outcomes.
          </p>
        </div>

        {/* Goals Section */}
        <div className="p-8 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-600">Our Goals</h2>
          <ul className="mt-4 space-y-3 text-gray-700 leading-6 list-disc list-inside">
            <li>Provide an intuitive, secure platform for competency tracking.</li>
            <li>Empower medical professionals with verified digital credentials.</li>
            <li>Support institutions in implementing competency-based training.</li>
            <li>Ensure seamless and secure data sharing across healthcare networks.</li>
            <li>Facilitate reliable, data-driven hiring decisions.</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg font-medium text-gray-700">
          MedLedger is more than a tracking system—it's a bridge to a healthcare system rooted in trust, transparency, and efficiency. Together, we’re building a future where competency verification is no longer a hurdle but a catalyst for growth in the medical field.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
