"use client";

import { useFlightStore } from "../store/flightStore";

export default function SearchForm() {
  const {
    origin,
    destination,
    date,
    passengers,

    setOrigin,
    setDestination,
    setDate,
    setPassengers,
  } = useFlightStore();

  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl">
      <h2 className="text-4xl font-bold text-blue-900 mb-8">
        Search Flights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="From"
          value={origin}
          onChange={(e) =>
            setOrigin(e.target.value)
          }
          className="border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <input
          type="text"
          placeholder="To"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
          className="border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <input
          type="number"
          placeholder="Passengers"
          value={passengers}
          onChange={(e) =>
            setPassengers(
              Number(e.target.value)
            )
          }
          className="border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />
      </div>
    </div>
  );
}