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
  const addEvent = async (newEvent) => {
    const response = await fetch("http://localhost:5001/api/events/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    return await response.json();
  };

  const fetchEvents = async () => {
    const response = await fetch("http://localhost:5001/api/events/");
    return await response.json();
  };

  useEffect(() => {
    fetchEvents().then((data) => setEvents(data));
  }, []);
  return (
    <div className="flex justify-center items-start  w-[100vw]">
      <div className="flex flex-wrap gap-[2rem] p-10 shadow-xl  w-[80vw]  max-w-[1440px] justify-center items-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          // editable={true} // Not enabled for now
          events={events}
          select={handleDateSelect} // Handles new reservations
          fetchEvents={fetchEvents}
          contentHeight="auto"
          contentWidth="auto"
          height="auto"
          
          allDaySlot={false}
          slotMinTime="07:00:00"
          slotMaxTime="24:00:00"
          slotDuration="00:30:00"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
            list: "List",
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
