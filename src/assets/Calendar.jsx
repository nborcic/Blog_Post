import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState({});

  // Generate calendar data
  const generateCalendar = () => {
    const months = Array.from({ length: 12 }, (_, i) =>
      new Date(0, i).toLocaleString("default", { month: "long" })
    );
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return { months, days };
  };

  const { months, days } = generateCalendar();

  // Handle booking
  const handleBooking = (date) => {
    const name = prompt("Enter renter's name:");
    if (!name) return;

    setBookings((prev) => ({
      ...prev,
      [date]: name,
    }));
  };

  return (
    <div className="flex flex-wrap gap-[2rem] p-10 shadow-xl  max-w-[1440px] justify-center items-center">
      {months.map((month, monthIndex) => (
        <div key={monthIndex} className="border border-gray-300 p-[1rem]">
          <h3>{month}</h3>
          <div className="grid grid-cols-8 gap-[5px] p-5px ">
            {days.map((day) => {
              const dateKey = `${monthIndex + 1}-${day}`;
              return (
                <div
                  key={dateKey}
                  className={`day shadow-xl ${
                    bookings[dateKey] ? "booked" : "available"
                  }`}
                  onClick={() => {
                    setSelectedDate(dateKey);
                    handleBooking(dateKey);
                  }}
                >
                  <span>{day}</span>
                  {bookings[dateKey] && (
                    <div className="tooltip">{bookings[dateKey]}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="p-[1rem]">
        {selectedDate && (
          <div className="booking-info">
            <h4 className="text-2xl">Details for {selectedDate}</h4>
            <p className="text-lg">
              {bookings[selectedDate] || "No booking yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
