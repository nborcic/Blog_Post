import "./FullCalendar.css";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

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
    const response = await fetch("http://localhost:5001/api/reservations");
    return await response.json();
  };

  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
    
  }, []);
  return (
    <div className="flex justify-center items-start h-[100vh] w-[100vw]">
      <div className="flex flex-wrap gap-[2rem] p-10 shadow-xl h-[75vh] w-[80vw]  max-w-[1440px] justify-center items-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          events={events}
          // select={handleDateSelect} // Handles new reservations

          // fetchEvents={fetchEvents}
          // addEvent={addEvent}
          contentHeight="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
