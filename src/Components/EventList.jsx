import React, { useEffect } from "react";
import { useState } from "react";
import { fetchEvents, handleDeleteEvent } from "../Assets/Utils.js";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const handleEvent = async (id) => {
    try {
      handleDeleteEvent("http://localhost:5001/api/events/", "DELETE", {
        id,
      }).then((response) => {
        if (response._id) {
          const filteredE = events.filter((e) => e._id !== response._id);
          setEvents(filteredE);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEvents("http://localhost:5001/api/events/").then((events) => {
      setEvents(events);
    });
  }, []);

  return (
    <div>
      <div className="mt-10 max-w-[1440px] bg-gray-100 p-10 rounded-xl shadow-xl">
        <div className="m-4 p-4 rounded shadow flex flex-col justify-center items-center w-fill">
          <h2 className="text-2xl font-bold mb-4">Event List</h2>
          {events.length === 0 ? (
            <p className="text-gray-600">No events available.</p>
          ) : (
            <div className="w-full">
              <ul className="flex flex-wrap gap-4 justify-center">
                {events.map((event, index) => (
                  <li
                    key={index}
                    className="p-4 border rounded shadow transition duration-200 hover:bg-gray-50 hover:shadow-lg hover:scale-105 flex flex-col items-start min-w-[200px]"
                  >
                    <h3 className="text-xl font-semibold">
                      {event.title || "No title"}
                      <span
                        onClick={(e) => handleEvent(event._id)}
                        className="text-sm font-normal text-gray-500 hover:text-red-500 cursor-pointer"
                      >
                        {" "}
                        X
                      </span>
                    </h3>
                    <p className="mt-1">
                      {event.description || "No description"}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Start:</span>{" "}
                      {event.start || "No Start"}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Location:</span>{" "}
                      {event.location || "No location"}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Room Number:</span>{" "}
                      {event.roomNumber || "No roomNumber"}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Event Type:</span>{" "}
                      {event.eventType || "No eventType"}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">All Day:</span>{" "}
                      {event.allDay ? "Yes" : "No"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
