"use client";

import { useFlightStore } from "../store/flightStore";

export default function MyBookings() {

  const {
    bookings,
    cancelBooking,
    setCurrentStep,
  } = useFlightStore();

  if (bookings.length === 0) {
    return null;
  }

  return (

    <div className="max-w-5xl mx-auto mt-16">

      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        My Bookings
      </h2>

      <div className="space-y-8">

        {bookings.map((booking, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-4xl font-bold text-black">
                  {booking.flight.airline}
                </h3>

                <p className="text-gray-600 text-xl mt-2">
                  {booking.flight.origin}
                  →
                  {booking.flight.destination}
                </p>

              </div>

              <div className="bg-green-500 text-white px-5 py-2 rounded-full text-lg font-semibold">
                Confirmed
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

              <div>
                <p className="text-gray-500">
                  Passenger
                </p>

                <p className="text-2xl font-bold text-black">
                  {booking.passengerName}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Seat
                </p>

                <p className="text-2xl font-bold text-black">
                  {booking.seat}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  PNR
                </p>

                <p className="text-2xl font-bold text-cyan-600">
                  {booking.pnr}
                </p>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <button
                onClick={() =>
                  setCurrentStep(2)
                }
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-bold"
              >
                Reschedule
              </button>

              <button
                onClick={() =>
                  cancelBooking(index)
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold"
              >
                Cancel Booking
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}