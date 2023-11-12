import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-5">
        <h2 className="text-xl">Welcome to my personal webpage!</h2>
        <p>This is a placeholder for your content. Update it as needed.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;