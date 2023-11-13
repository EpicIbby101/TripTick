// components/FeatureCard.js
import React from "react";
import Link from "next/link";

const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{feature.title}</h2>
      <Link href={feature.href}>
      </Link>
    </div>
  );
};

export default FeatureCard;
