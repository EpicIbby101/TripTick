import React from "react";

const FlightCard = ({ flight }) => {
  const { flight_date, flight_number, departure, arrival, airline } = flight;

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <div className="font-bold text-lg mb-2">
            Flight {flight_number} by {airline}
        </div>
        <div className="text-gray-700 mb-2">
            Departure: {departure.iata} - {departure.airport}
        </div>
        <div className="text-gray-700 mb-2">
            Arrival: {arrival.iata} - {arrival.airport}
        </div>
        <div className="text-gray-700">
            Date: {flight_date}
        </div>
    </div>
  )
};

export default FlightCard;
