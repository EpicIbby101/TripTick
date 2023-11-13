// components/FlightSearch.js
import React, { useState } from "react";
import axios from "axios";

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightData, setFlightData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://api.aviationstack.com/v1/flights?access_key=73b458dfa0ef62f4dd29731377983668&flight_iata=${flightNumber}`
      );

      setFlightData(response.data.data[0]); // Assuming the API returns an array of data
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  return (
    <div>
      <label>
        Flight Number:
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {flightData && (
        <div>
          <h2>Flight Information</h2>
          <p>Flight Number: {flightData.flight.iata}</p>
          <p>Departure Airport: {flightData.departure.airport}</p>
          <p>Arrival Airport: {flightData.arrival.airport}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
