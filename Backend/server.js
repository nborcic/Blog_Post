import express from "express";
import mongooDB from "./mongoDB.js";
import Event from "./Utils/EventSchema.js";
import ProfileSchema from "./Utils/ProfileSchema.js";
import bodyParser from "body-parser";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(
    {
        origin: '*'
    }
));
mongooDB();


app.use("api/events", Event);
app.use("api/profile", ProfileSchema);


app.get("/api/events", async (req, res) => {
    try {
        const reservation = await Event.find();
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


app.post("/api/events", async (req, res) => {
    const newEvent = new Event(req.body);
    try {
        const reservation = await newEvent.save();
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});
app.delete("/api/events", async (req, res) => {
    const { id } = req.body;
    try {
        const event = await Event.findByIdAndDelete(id);
        console.log(event);

        res.json(event);
    } catch (error) {

        res.json("error deleting id ")
    }
});

app.get("/api/profile", async (req, res) => {
    try {
        const profiles = await ProfileSchema.find();
        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(process.env.PORT, () => {
    const baseURL = process.env.BASEURL || 'http://localhost:';
    console.log(`Server running on ${baseURL + PORT}`);
});
