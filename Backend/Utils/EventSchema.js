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
    backgroundColor: { type: String },
    textColor: { type: String },
    extendedProps: {
        roomNumber: { type: String },
        eventType: { type: String }
    }
});
const Event = mongoose.model('Event', eventSchema);
export default Event;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use("api/events", Event);


app.get("/api/events", async (req, res) => {
    try {
        const reservation = await Event.find();
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});
