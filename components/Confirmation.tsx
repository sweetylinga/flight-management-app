"use client";

import { useFlightStore } from "../store/flightStore";

export default function Confirmation() {

  const {
    bookings,
    resetBooking,
    setCurrentStep,
  } = useFlightStore();

  const latestBooking =
    bookings[
      bookings.length - 1
    ];

  if (!latestBooking) {
    return null;
  }

  return (

    <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl p-10 shadow-2xl">

      <h1 className="text-5xl font-bold text-green-600 mb-10">
        Booking Confirmed ✈️
      </h1>

      <div className="space-y-6 text-black">

        <p className="text-2xl">
          <span className="font-bold">
            Passenger:
          </span>{" "}
          {latestBooking.passengerName}
        </p>

        <p className="text-2xl">
          <span className="font-bold">
            Flight:
          </span>{" "}
          {latestBooking.flight.airline}
        </p>

        <p className="text-2xl">
          <span className="font-bold">
            Route:
          </span>{" "}
          {latestBooking.flight.origin}
          →
          {latestBooking.flight.destination}
        </p>

        <p className="text-2xl">
          <span className="font-bold">
            Seat:
          </span>{" "}
          {latestBooking.seat}
        </p>

        <p className="text-2xl">
          <span className="font-bold">
            PNR:
          </span>{" "}

          <span className="text-cyan-600 font-bold">
            {latestBooking.pnr}
          </span>
        </p>

        <p className="text-2xl">
          <span className="font-bold">
            Status:
          </span>{" "}

          <span className="text-green-600 font-bold">
            Confirmed
          </span>
        </p>

      </div>

      <div className="flex gap-5 mt-10">

        <button
          onClick={() => {
            resetBooking();
          }}
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold"
        >
          New Booking
        </button>

        <button
          onClick={() =>
            setCurrentStep(2)
          }
          className="bg-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-bold"
        >
          Reschedule
        </button>

      </div>

    </div>
  );
}