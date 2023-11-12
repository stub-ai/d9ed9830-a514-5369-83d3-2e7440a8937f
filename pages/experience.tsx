import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Experience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-5">
        <h2 className="text-xl">My Experience</h2>
        {/* Add your experience list and form here */}
      </main>
      <Footer />
    </div>
  );
};

export default Experience;