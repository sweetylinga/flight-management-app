# ✈️ Flight Booking Management App

A responsive Flight Booking Management System built using Next.js, TypeScript, Tailwind CSS, and Zustand.

This project simulates a real-world airline booking experience where users can search flights, select seats, book tickets, reschedule bookings, and cancel bookings through a responsive multi-step interface.

---

# 🌐 Live Deployment

Live Application:

https://flight-management-ik68bcpr0-sweetylingas-projects.vercel.app

GitHub Repository:

https://github.com/sweetylinga/flight-management-app

---

# 🚀 Features

## Flight Search

* Search flights by:

  * Origin
  * Destination
  * Travel Date
  * Passenger Count

## Flight Selection

* Browse available flights
* Airline information
* Route information
* Departure time
* Flight pricing
* Class type (Economy / Business)

## Interactive Seat Selection

* Cabin seat map UI
* Economy and Business seat sections
* Occupied seat disabling
* Dynamic seat selection
* Mobile-friendly responsive layout

## Passenger Booking Flow

* Passenger details form
* Passport number
* Nationality
* Auto-generated PNR code

## Booking Management

* My Bookings section
* Booking confirmation
* Reschedule booking flow
* Cancel booking functionality

## State Management

Implemented using Zustand:

* Global flight booking state
* Persist middleware
* Partialize configuration
* Booking flow state persistence

---

# 🛠️ Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Zustand
* Vercel (Deployment)

---

# 📦 Local Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/sweetylinga/flight-management-app.git
```

## 2. Navigate to Project

```bash
cd flight-management-app
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

## 5. Open Application

```bash
http://localhost:3000
```

---

# 🏗️ Architecture Decisions

## Component-Based Structure

The application follows a reusable component architecture for better maintainability and separation of concerns.

Components include:

* SearchForm
* FlightList
* SeatMap
* BookingForm
* Confirmation
* MyBookings

## Zustand State Management

A centralized Zustand store (`useFlightStore`) was implemented to manage:

* Search query
* Selected flight
* Selected seat
* Current booking step
* Passenger details
* Booking management

Persist middleware is used to preserve booking state and user progress.

Partialize is used to control persisted data and avoid storing unnecessary state.

## Multi-Step Booking Flow

The application follows a step-based booking process:

Search → Flight Selection → Seat Selection → Passenger Details → Confirmation → My Bookings

This improves UX and creates a realistic airline booking experience.

## Responsive UI

Tailwind CSS was used to create a responsive design that adapts to:

* Mobile devices
* Tablets
* Desktop screens

---

# ⚖️ Trade-offs / Incomplete Features

Due to assignment time constraints and prioritizing frontend architecture, user experience, and state management, some advanced backend-specific features were simplified.

### Implemented (Frontend Simulation)

* Interactive seat selection
* Dynamic occupied seats
* Realtime-style seat availability simulation
* Booking management flow
* Rescheduling and cancellation workflow
* Zustand persistence

### Not Fully Implemented

* Supabase database integration
* Supabase Auth
* Row Level Security (RLS)
* RPC seat-locking function
* Database triggers for cancellation validation
* Supabase Realtime websocket synchronization
* Full PWA configuration (bonus)

If extended further, the next phase would integrate Supabase backend services, realtime synchronization, secure booking APIs, and PWA capabilities.

---

# 📁 Folder Structure

```txt
app/
components/
store/
public/
```

---

# 📌 Assignment Requirements Covered

| Requirement                    | Status |
| ------------------------------ | ------ |
| Next.js App Router             | ✅      |
| Flight Search Flow             | ✅      |
| Booking Flow                   | ✅      |
| Seat Selection                 | ✅      |
| Booking Confirmation           | ✅      |
| Reschedule Booking             | ✅      |
| Cancel Booking                 | ✅      |
| Zustand State Management       | ✅      |
| Persist Middleware             | ✅      |
| Partialize                     | ✅      |
| Responsive UI                  | ✅      |
| My Bookings Page               | ✅      |
| Realtime-style Seat Simulation | ✅      |
| Deployed Preview Link          | ✅      |

---

# 👨‍💻 Author

Linga Srilaxmi

