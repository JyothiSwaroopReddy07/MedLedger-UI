import React from 'react';

const openPositions = [
  {
    title: "Blockchain Developer",
    location: "Remote",
    description: "Build and optimize blockchain integrations for secure competency tracking. Work closely with our development team to ensure data integrity and security on the MedLedger platform.",
    link: "#",
  },
  {
    title: "Full Stack Developer",
    location: "San Francisco, CA or Remote",
    description: "Develop and enhance MedLedger’s front-end and back-end systems, focusing on user experience, scalability, and seamless data flow.",
    link: "#",
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    description: "Create intuitive, accessible, and visually appealing designs that prioritize ease of use for medical professionals and institutions.",
    link: "#",
  },
  {
    title: "Healthcare Partnerships Manager",
    location: "New York, NY",
    description: "Build and maintain relationships with healthcare institutions and partners, fostering a network that supports our mission to streamline competency verification.",
    link: "#",
  },
];

const Careers = () => {
  return (
    <section className="bg-white py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-900 sm:text-5xl">Join Our Team</h1>
        <p className="mt-6 text-lg text-gray-700 leading-7">
          At MedLedger, we’re driven by a mission to transform healthcare competency tracking. Join us in building a secure and innovative future for healthcare professionals and institutions.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-yellow-600">Why Work With Us?</h2>
        <p className="mt-4 text-gray-700 leading-6">
          MedLedger is more than a tech company; it’s a team of innovators, healthcare professionals, and technologists dedicated to building a platform rooted in trust, transparency, and security. If you are passionate about making an impact in healthcare and thrive in a collaborative, forward-thinking environment, we’d love to hear from you!
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {openPositions.map((position, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">{position.title}</h3>
            <p className="mt-2 text-gray-600">{position.location}</p>
            <p className="mt-4 text-gray-700 leading-6">{position.description}</p>
            <a
              href={position.link}
              className="inline-block mt-6 px-5 py-2 text-yellow-600 font-semibold border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-yellow-600">Our Culture</h2>
        <p className="mt-4 text-gray-700 leading-6">
          At MedLedger, we value diversity, innovation, and commitment to quality. Our culture promotes collaboration and continuous growth, with a supportive environment where every team member's ideas are valued. We believe in fostering a balance between professional development and personal well-being.
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 font-medium">
          Ready to make a difference in healthcare? Join MedLedger and be part of something transformative.
        </p>
        <a
          href="/"
          className="mt-8 inline-block bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
        >
          View All Open Positions
        </a>
      </div>
    </section>
  );
};

export default Careers;
