"use client";

import { useFlightStore } from "../store/flightStore";

const seats = [
  {
    seat: "1A",
    type: "First",
  },
  {
    seat: "1B",
    type: "First",
  },
  {
    seat: "1C",
    type: "First",
  },
  {
    seat: "1D",
    type: "First",
  },

  {
    seat: "2A",
    type: "Business",
  },
  {
    seat: "2B",
    type: "Business",
  },
  {
    seat: "2C",
    type: "Business",
  },
  {
    seat: "2D",
    type: "Business",
  },

  {
    seat: "3A",
    type: "Economy",
  },
  {
    seat: "3B",
    type: "Economy",
  },
  {
    seat: "3C",
    type: "Economy",
  },
  {
    seat: "3D",
    type: "Economy",
  },

  {
    seat: "4A",
    type: "Economy",
  },
  {
    seat: "4B",
    type: "Economy",
  },
  {
    seat: "4C",
    type: "Economy",
  },
  {
    seat: "4D",
    type: "Economy",
  },
];

const occupiedSeats = [
  "1B",
  "2C",
  "3D",
];

export default function SeatMap() {

  const {
    selectedSeat,
    setSelectedSeat,
  } = useFlightStore();

  const handleSeatClick = (
    seat: string
  ) => {

    setSelectedSeat(seat);
  };

  return (

    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Select Your Seat
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {seats.map((item) => {

          const occupied =
            occupiedSeats.includes(
              item.seat
            );

          return (

            <button
              key={item.seat}
              disabled={occupied}
              onClick={() =>
                handleSeatClick(
                  item.seat
                )
              }
              className={`rounded-2xl p-5 transition-all shadow-xl

              ${
                occupied
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : selectedSeat ===
                    item.seat
                  ? "bg-green-500 text-white"
                  : item.type ===
                    "First"
                  ? "bg-yellow-400 text-black"
                  : item.type ===
                    "Business"
                  ? "bg-cyan-400 text-black"
                  : "bg-white text-black"
              }
              `}
            >

              <h3 className="text-2xl font-bold">
                {item.seat}
              </h3>

              <p className="mt-2 text-sm font-semibold">
                {item.type}
              </p>

            </button>
          );
        })}

      </div>

      <div className="flex flex-wrap gap-6 mt-8 text-sm">

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-yellow-400"></div>
          First
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-cyan-400"></div>
          Business
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-white"></div>
          Economy
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-red-500"></div>
          Occupied
        </div>

      </div>

    </div>
  );
}