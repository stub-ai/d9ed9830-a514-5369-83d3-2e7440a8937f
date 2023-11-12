import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Education = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-5">
        <h2 className="text-xl">My Education</h2>
        {/* Add your education list here */}
      </main>
      <Footer />
    </div>
  );
};

export default Education;