import React from 'react';
import FeatureCard from './CfeaturedCard';

function HeroSection() {
  return (
    <div className="flex justify-between p-10">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold mb-6">Dive Into New Realities</h1>
        <button className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold text-lg">
          Get Started
        </button>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Transform Your World</h2>
          <p>with Immersive VR Experiences</p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-purple-800 rounded-full flex items-center justify-center">
          <span className="text-3xl">🥽</span>
        </div>
        <FeatureCard 
          icon="🥽"
          title="Open a New Reality"
          className="absolute right-0 top-72"
        />
        <FeatureCard 
          icon="👥"
          title="25k users"
          subtitle="Proudly Serving Thousands Who Trust Our Immersive Experiences"
          className="absolute right-72 top-96"
        />
      </div>
    </div>
  );
}

export default HeroSection;
