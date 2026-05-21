"use client";

import { useFlightStore } from "../store/flightStore";

const flights = [
  {
    id: 1,
    airline: "IndiGo",
    origin: "Hyderabad",
    destination: "Delhi",
    departure: "10:30 AM",
    duration: "2h 20m",
    price: "₹5,200",
  },

  {
    id: 2,
    airline: "Air India",
    origin: "Mumbai",
    destination: "Bangalore",
    departure: "1:45 PM",
    duration: "1h 50m",
    price: "₹6,800",
  },

  {
    id: 3,
    airline: "SpiceJet",
    origin: "Chennai",
    destination: "Kolkata",
    departure: "6:20 PM",
    duration: "2h 45m",
    price: "₹4,500",
  },
];

export default function FlightList() {
  const { setSelectedFlight } =
    useFlightStore();

  return (
    <div className="mt-16">
      <h2 className="text-6xl font-bold text-cyan-400 mb-10">
        Available Flights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {flights.map((flight) => (
          <div
            key={flight.id}
            onClick={() =>
              setSelectedFlight(flight)
            }
            className="bg-white rounded-2xl p-8 shadow-xl cursor-pointer hover:bg-green-400 transition"
          >
            <h3 className="text-5xl font-bold mb-6">
              {flight.airline}
            </h3>

            <p className="text-3xl mb-4">
              {flight.origin} →{" "}
              {flight.destination}
            </p>

            <p className="text-2xl mb-3">
              Departure:{" "}
              {flight.departure}
            </p>

            <p className="text-2xl mb-3">
              Duration:{" "}
              {flight.duration}
            </p>

            <p className="text-4xl font-bold text-cyan-600">
              {flight.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}