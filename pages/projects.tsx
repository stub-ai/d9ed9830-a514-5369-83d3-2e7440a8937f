import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-5">
        <h2 className="text-xl">My Projects</h2>
        {/* Add your projects list and form here */}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;