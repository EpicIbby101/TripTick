import React from 'react';

const Features = () => {
  const features = [
    { title: 'Feature 1', icon: 'icon-1', link: '/feature1' },
    { title: 'Feature 2', icon: 'icon-2', link: '/feature2' },
    { title: 'Feature 3', icon: 'icon-3', link: '/feature3' },
    { title: 'Feature 4', icon: 'icon-4', link: '/feature4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 justify-center">
      {features.map((feature, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">
              <i className={`fa ${feature.icon} text-4xl`} />
            </button>
            <div className="text-center">{feature.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
