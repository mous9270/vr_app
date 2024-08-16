import React from 'react';

function FeatureCard({ icon, title, subtitle, className }) {
  return (
    <div className={`bg-purple-800 rounded-lg p-4 w-64 ${className}`}>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  );
}

export default FeatureCard;
