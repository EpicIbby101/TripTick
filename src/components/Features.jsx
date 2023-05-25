import React from 'react';

const Features = () => {
  const features = [
    { title: 'Feature 1', icon: 'icon-1.svg' },
    { title: 'Feature 2', icon: 'icon-2.svg' },
    { title: 'Feature 3', icon: 'icon-3.svg' },
    { title: 'Feature 4', icon: 'icon-4.svg' },
    { title: 'Feature 5', icon: 'icon-5.svg' },
    { title: 'Feature 6', icon: 'icon-6.svg' },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl mb-5'>- Features -</p>
    <div className="grid grid-cols-2 gap-x-10 gap-y-6 ">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <img src={`/icons/${feature.icon}`} alt={feature.title} className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-xl" />
          <h3 className="text-lg font-semibold">{feature.title}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
