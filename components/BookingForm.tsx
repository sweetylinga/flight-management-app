"use client";

import { useState } from "react";

import { useFlightStore } from "../store/flightStore";

export default function BookingForm() {

  const {

    passengerName,
    setPassengerName,

    selectedSeat,
    selectedFlight,

    addBooking,

    setCurrentStep,

  } = useFlightStore();

  const [passport, setPassport] =
    useState("");

  const [nationality, setNationality] =
    useState("");

  const handleBooking = () => {

    if (
      !passengerName ||
      !selectedSeat ||
      !selectedFlight
    ) {

      alert(
        "Please complete booking details"
      );

      return;
    }

    const pnr = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    addBooking({
      passengerName,
      seat: selectedSeat,
      flight: selectedFlight,
      passport,
      nationality,
      pnr,
    });

    setCurrentStep(4);
  };

  return (

    <div className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl p-10 shadow-2xl">

      <h2 className="text-4xl font-bold text-blue-900 mb-8">
        Passenger Details
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          value={passengerName}
          onChange={(e) =>
            setPassengerName(
              e.target.value
            )
          }
          className="w-full border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <input
          type="text"
          placeholder="Passport Number"
          value={passport}
          onChange={(e) =>
            setPassport(
              e.target.value
            )
          }
          className="w-full border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <input
          type="text"
          placeholder="Nationality"
          value={nationality}
          onChange={(e) =>
            setNationality(
              e.target.value
            )
          }
          className="w-full border-2 border-gray-300 rounded-xl p-4 text-black text-lg"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-xl font-bold py-4 rounded-xl"
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}