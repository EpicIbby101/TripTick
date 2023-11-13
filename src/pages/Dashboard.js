// pages/dashboard.js
import React from "react";
import FeatureCard from "../components/FeatureCard";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

const features = [
  { id: 1, title: "Feature 1", href: "/feature1" },
  { id: 2, title: "Feature 2", href: "/feature2" },
  { id: 2, title: "Feature 2", href: "/feature2" },
  { id: 2, title: "Feature 2", href: "/feature2" },

  // Add more features as needed
];

const Dashboard = () => {
  return (
    <div>
      <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
    </div>
  );
};

export default Dashboard;
