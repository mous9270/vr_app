import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl font-bold leading-tight">Dive Into New Realities</h1>
          <button className="px-8 py-4 bg-indigo-700 rounded-full hover:bg-indigo-600">Get Started</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="../public/bg.png" alt="VR Headset" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="absolute right-8 bottom-8 flex flex-col items-center space-y-4">
        <div className="bg-white text-indigo-900 px-6 py-2 rounded-full">Open a New Reality</div>
        <div className="bg-indigo-900 px-6 py-2 rounded-full">
          <div className="text-4xl font-bold">25k users</div>
          <div>Proudly Serving Thousands Who Trust Our Immersive Experiences</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

