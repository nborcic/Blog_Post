import { Modal } from "flowbite-react";
import { useState } from "react";

export function Component({ isOpen, onClose, onSubmit }) {
  const [openModal, setOpenModal] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    location: "",
    allDay: false,
    roomNumber: "",
    eventType: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateSelect = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      start: "",
      end: "",
      description: "",
      location: "",
      allDay: false,
      roomNumber: "",
      eventType: "",
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg w-96">
              <h2 className="text-xl mb-4">Create Event</h2>
              <form onSubmit={handleDateSelect}>
                <div className="mb-4">
                  <label className="block">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Event title"
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Event description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="If event is outside or online"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block">All Day Event</label>
                  <input
                    type="checkbox"
                    name="allDay"
                    checked={formData.allDay}
                    onChange={handleInputChange}
                    className="p-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block">Room Number</label>
                  <input
                    type="text"
                    name="roomNumber"
                    placeholder="Room number 1-4"
                    value={formData.roomNumber || "1-3"}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select event type</option>
                    <option value="meeting">Meeting</option>
                    <option value="conference">Holidays</option>
                    <option value="party">Party</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Component;
