import mongoose from 'mongoose';
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';



const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String },
    location: { type: String },
    allDay: { type: Boolean, default: false },
    extendedProps: {
        roomNumber: { type: String },
        eventType: { type: String }
    }
});
const Event = mongoose.model('Event', eventSchema);
export default Event;

