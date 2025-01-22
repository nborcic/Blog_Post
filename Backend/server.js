import express from "express";
import mongooDB from "./mongoDB.js";
import Event from "./Utils/EventSchema.js";
import ProfileSchema from "./Utils/ProfileSchema.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
mongooDB();

// Routes
app.use("api/reservations", Event);
app.use("api/profile", ProfileSchema);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Server errorR" });
});

app.get("/api/reservations", async (req, res) => {
    try {
        const reservation = await Event.find();
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
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
// Start the server
const PORT = process.env.PORT || 5001;
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.BASEURL + PORT}`);
});
