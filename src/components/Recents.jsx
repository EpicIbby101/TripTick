import React from 'react';

const Recents = () => {
  // Dummy data for recently accessed features
  const recentlyAccessed = [
    { id: 1, title: 'Currency Converter', icon: 'icon-1.png' },
    { id: 2, title: 'Checklist', icon: 'icon-2.png' },
    { id: 3, title: 'Itinerary Planner', icon: 'icon-3.png' },
  ];

  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">- Recent Activity -</h3>
      <div className="flex space-x-4">
        {recentlyAccessed.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center">
            <img
              src={feature.icon}
              alt={feature.title}
              className="bg-gray-400 w-16 h-16 rounded-full object-cover"
            />
            <p className="mt-2 text-sm text-center">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
