import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./FullCalendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter booking details:");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };

      // Add the new event to MongoDB
      addEvent(newEvent).then((savedEvent) => {
        setEvents((prevEvents) => [...prevEvents, savedEvent]);
      });
    }
  };
  const fetchEvents = async () => {
    const response = await fetch("http://localhost:5000/reservations");
    return await response.json();
  };

  const addEvent = async (event) => {
    const response = await fetch("http://localhost:5000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    return await response.json();
  };
  // Fetch events from MongoDB on component load
  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
  }, [fetchEvents]);
  return (
    <div className="flex flex-wrap gap-[2rem] p-10 shadow-xl max-w-[1440px] justify-center items-center">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        events={events} // Events fetched from MongoDB
        select={handleDateSelect} // Handles new reservations
        fetchEvents={fetchEvents}
        addEvent={addEvent}
      />
    </div>
  );
};

export default Calendar;
