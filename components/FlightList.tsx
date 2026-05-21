"use client";

import { useFlightStore } from "../store/flightStore";

const flights = [
  {
    id: 1,
    airline: "IndiGo",
    origin: "Hyderabad",
    destination: "Delhi",
    departure: "10:30 AM",
    price: 5200,
    classType: "Economy",
  },

  {
    id: 2,
    airline: "Air India",
    origin: "Mumbai",
    destination: "Bangalore",
    departure: "1:45 PM",
    price: 6800,
    classType: "Business",
  },

  {
    id: 3,
    airline: "SpiceJet",
    origin: "Chennai",
    destination: "Kolkata",
    departure: "6:20 PM",
    price: 4500,
    classType: "Economy",
  },
];

export default function FlightList() {
  const {
    setSelectedFlight,
    setCurrentStep,
  } = useFlightStore();

  const handleSelectFlight = (
    flight: any
  ) => {
    setSelectedFlight(flight);

    setCurrentStep(2);
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">

      <h2 className="text-6xl font-bold text-cyan-400 mb-10">
        Available Flights
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {flights.map((flight) => (

          <div
            key={flight.id}
            className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
          >

            <div className="flex justify-between items-center">

              <h3 className="text-4xl font-bold text-black">
                {flight.airline}
              </h3>

              <span
                className={`px-4 py-2 rounded-full text-sm font-bold ${
                  flight.classType ===
                  "Business"
                    ? "bg-cyan-500 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {flight.classType}
              </span>

            </div>

            <p className="text-gray-700 text-2xl mt-6">
              {flight.origin} → {flight.destination}
            </p>

            <p className="text-gray-500 text-xl mt-4">
              Departure: {flight.departure}
            </p>

            <p className="text-cyan-600 text-4xl font-bold mt-6">
              ₹{flight.price}
            </p>

            <button
              onClick={() =>
                handleSelectFlight(
                  flight
                )
              }
              className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-white text-xl font-bold py-4 rounded-2xl"
            >
              Select Flight
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}