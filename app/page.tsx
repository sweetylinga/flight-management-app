"use client";

import SearchForm from "../components/SearchForm";
import FlightList from "../components/FlightList";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import Confirmation from "../components/Confirmation";
import MyBookings from "../components/MyBookings";

import { useFlightStore } from "../store/flightStore";

export default function Home() {

  const currentStep =
    useFlightStore(
      (state) =>
        state.currentStep
    );

  return (

    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold text-cyan-400 mb-4">
          Flight Booking ✈️
        </h1>

        <p className="text-gray-300 text-xl mb-12">
          Book flights and reserve seats
        </p>

        {/* STEP 1 */}

        {currentStep === 1 && (
          <>
            <SearchForm />

            <FlightList />
          </>
        )}

        {/* STEP 2 */}

        {currentStep === 2 && (
          <SeatMap />
        )}

        {/* STEP 3 */}

        {currentStep === 3 && (
          <BookingForm />
        )}

        {/* STEP 4 */}

        {currentStep === 4 && (
          <>
            <Confirmation />

            <MyBookings />
          </>
        )}

      </div>

    </main>
  );
}