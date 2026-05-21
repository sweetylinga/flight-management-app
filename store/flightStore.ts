import { create } from "zustand";

import { persist } from "zustand/middleware";

interface Flight {
  airline: string;
  origin: string;
  destination: string;
  departure: string;
  price: string;
  classType: string;
}

interface Booking {
  passengerName: string;
  seat: string;
  flight: Flight;
  passport: string;
  nationality: string;
  pnr: string;
}

interface FlightState {

  currentStep: number;

  origin: string;
  destination: string;
  date: string;
  passengers: number;

  selectedFlight: Flight | null;

  selectedSeat: string;

  passengerName: string;

  bookings: Booking[];

  setCurrentStep: (
    step: number
  ) => void;

  setOrigin: (
    origin: string
  ) => void;

  setDestination: (
    destination: string
  ) => void;

  setDate: (
    date: string
  ) => void;

  setPassengers: (
    passengers: number
  ) => void;

  setSelectedFlight: (
    flight: Flight
  ) => void;

  setSelectedSeat: (
    seat: string
  ) => void;

  setPassengerName: (
    name: string
  ) => void;

  addBooking: (
    booking: Booking
  ) => void;

  cancelBooking: (
    index: number
  ) => void;

  resetBooking: () => void;
}

export const useFlightStore =
  create<FlightState>()(

    persist(

      (set) => ({

        currentStep: 1,

        origin: "",
        destination: "",
        date: "",
        passengers: 1,

        selectedFlight: null,

        selectedSeat: "",

        passengerName: "",

        bookings: [],

        setCurrentStep: (
          step
        ) =>
          set({
            currentStep: step,
          }),

        setOrigin: (
          origin
        ) =>
          set({
            origin,
          }),

        setDestination: (
          destination
        ) =>
          set({
            destination,
          }),

        setDate: (
          date
        ) =>
          set({
            date,
          }),

        setPassengers: (
          passengers
        ) =>
          set({
            passengers,
          }),

        setSelectedFlight: (
          selectedFlight
        ) =>
          set({
            selectedFlight,
            currentStep: 2,
          }),

        setSelectedSeat: (
          selectedSeat
        ) =>
          set({
            selectedSeat,
            currentStep: 3,
          }),

        setPassengerName: (
          passengerName
        ) =>
          set({
            passengerName,
          }),

        addBooking: (
          booking
        ) =>
          set((state) => ({
            bookings: [
              ...state.bookings,
              booking,
            ],
          })),

        cancelBooking: (
          index
        ) =>
          set((state) => ({

            bookings:
              state.bookings.filter(
                (_, i) =>
                  i !== index
              ),

          })),

        resetBooking: () =>
          set({

            currentStep: 1,

            selectedFlight:
              null,

            selectedSeat: "",

            passengerName: "",

          }),

      }),

      {
        name:
          "flight-booking-storage",

        partialize: (
          state
        ) => ({
          bookings:
            state.bookings,
        }),
      }

    )

  );