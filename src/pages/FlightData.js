// send api request
// console log data to ensure api works
// create two inputs => one for departure flights and one for arrivals
// when entered, the screen should show relevant information
import React, { useState } from "react";
import axios from "axios";
import FlightCard from "@/components/FlightCard";
import HomeButton from "@/components/HomeButton";

const FlightData = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen">
      <div className="absolute top-5 left-5">
        <HomeButton />
      </div>
      <div className="bg-gray-500 p-8 rounded-md">
        <div className="text-xl font-bold">Search Flight Data 🛫</div>
        <div className="text-black">
          <input className="mr-2 py-1" type="text" placeholder="Departure..." />
          <input className="mr-2 py-1" type="text" placeholder="Arrival..." />
          <input
            className="mr-3 py-1"
            type="text"
            placeholder="Flight Number..."
          />
          <button className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightData;
