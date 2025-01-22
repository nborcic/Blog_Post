import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String },
    location: { type: String },
    allDay: { type: Boolean, default: false },
    backgroundColor: { type: String },
    textColor: { type: String },
    extendedProps: {
        roomNumber: { type: String },
        eventType: { type: String }
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;