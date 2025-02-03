import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalCalendar from "./ModalCalendar";
import { fetchEvents } from "../Assets/Utils";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useAuth } from "../Assets/AuthProvider";
import Spinner from "./Spinner";

const Calendar = ({ selectInfo, formData }) => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempSelectInfo, setTempSelectInfo] = useState(null);
  const { authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="w-32 h-24">
        <Spinner />
      </div>
    );
  }

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    setTempSelectInfo(selectInfo);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (formData) => {
    if (!tempSelectInfo) return;

    const newEvent = {
      title: formData.title || "New Event",
      start: tempSelectInfo.startStr,
      end: tempSelectInfo.endStr,
      description: formData.description,
      location: formData.location,
      allDay: formData.allDay,
      extendedProps: {
        roomNumber: formData.roomNumber,
        eventType: formData.eventType,
      },
    };
    addEvent(newEvent).then((savedEvent) => {
      setEvents((prevEvents) => [...prevEvents, savedEvent]);
    });

    setTempSelectInfo(null);
    setIsModalOpen(false);
  };
  const addEvent = async (newEvent) => {
    const response = await fetch("http://localhost:5001/api/events/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    return await response.json();
  };
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const data = await fetchEvents("http://localhost:5001/api/events/");
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEventsData();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-wrap gap-[2rem] p-10 shadow-xl max-w-[1440px] justify-center items-center">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          // editable={true} // Not enabled for now
          events={events}
          select={handleDateSelect}
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
          eventClassNames="bg-green-500 text-white rounded-lg border-none" // grid day background
        />
      </div>
      <div className="absolute bg-gray-300  w-100vw h-100vh flex justify-center items-center z-1000 ">
        {isModalOpen &&
          createPortal(
            <ModalCalendar
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleModalSubmit}
            />,
            document.body
          )}
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl mt-4 p-4 px-6">
        <Link to={"/dashboard/eventList"}>Check Event List</Link>
      </button>
    </div>
  );
};

export default Calendar;
