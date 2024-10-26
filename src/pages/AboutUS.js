import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 sm:px-8 lg:px-12">
        <a href="/" className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-gray-900">
                <FaArrowLeft className="mr-2" /> {/* Back arrow icon */}
                <span className="text-sm font-semibold">Back to Home</span>
        </a>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-900 sm:text-5xl">About Us</h1>
        <p className="mt-6 text-lg text-gray-700 leading-7">
          MedLedger was born out of a commitment to enhance healthcare through innovation, transparency, and trust. We strive to bring secure, accessible competency tracking to medical professionals and institutions alike.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        {/* Our Story Section */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-600">Our Story</h2>
          <p className="mt-4 text-gray-700 leading-6">
            Founded by a passionate team of healthcare and tech professionals, MedLedger began as an effort to tackle the inefficiencies in traditional medical competency tracking. Recognizing the critical need for a trustworthy and streamlined verification system, we built MedLedger to ensure that every medical professional’s accomplishments are accurately represented, verifiable, and accessible.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-600">Our Team</h2>
          <p className="mt-4 text-gray-700 leading-6">
            Our team is a blend of medical, blockchain, and software development experts dedicated to driving efficiency and transparency in healthcare. We are united by a shared vision to make medical competency tracking reliable and accessible, fostering a healthcare environment that values integrity and skill.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-yellow-600">Our Values</h2>
          <ul className="mt-4 space-y-3 text-gray-700 leading-6 list-disc list-inside">
            <li><strong>Innovation</strong>: We continuously seek new ways to enhance and modernize competency verification.</li>
            <li><strong>Integrity</strong>: We uphold the highest standards of security and transparency in every aspect of our platform.</li>
            <li><strong>Empowerment</strong>: We believe in empowering both medical professionals and institutions with the tools to verify and showcase true competency.</li>
            <li><strong>Collaboration</strong>: We work closely with healthcare providers and educational institutions to ensure MedLedger aligns with real-world needs.</li>
            <li><strong>Commitment to Quality</strong>: We prioritize quality in everything we do, from user experience to data security.</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg font-medium text-gray-700">
          At MedLedger, we are dedicated to advancing healthcare by creating a platform that everyone can trust. Together, we’re shaping a future where competency verification is seamless, reliable, and integral to every medical professional's journey.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
