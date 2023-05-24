import React from 'react';

const Recents = () => {
  // Mock data for recently accessed features
  const recentlyAccessedFeatures = [
    { id: 1, title: 'Feature 1', icon: 'icon-1.png' },
    { id: 2, title: 'Feature 2', icon: 'icon-2.png' },
    { id: 3, title: 'Feature 3', icon: 'icon-3.png' },
  ];

  return (
    <div className="p-4 rounded-lg">
      <h3 className="flex text-lg font-medium mb-4 justify-center">Recent Activity</h3>
      <div className="flex space-x-4 justify-center">
        {recentlyAccessedFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-200 rounded-md flex flex-col items-center text-center"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {recentlyAccessedFeatures.map((feature) => (
            <div key={feature.id} className='flex flex-col items-center'>
                <span className='text-sm'>{feature.title}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
