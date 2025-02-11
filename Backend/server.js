import express from "express";
import mongooDB from "./mongoDB.js";
import Event from "./Utils/EventSchema.js";
import ProfileSchema from "./Utils/ProfileSchema.js";
import bodyParser from "body-parser";
import cors from "cors";
import Subscribe from "./Utils/Subscribe.js";
import process from 'process';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

mongooDB();

app.use("api/events", Event);
app.use("api/profile", ProfileSchema);
app.use("api/subscribe", Subscribe);

app.post("api/subscribe", (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Valid email is required" });
  }

  try {
    // Here you would typically:
    // 1. Validate the email format
    // 2. Check if the email already exists in your database
    // 3. Store the email in your database
    // 4. Potentially send a confirmation email

    // For now, we'll just simulate a successful subscription
    // Replace this with your actual database logic

    // Example database insertion (pseudo-code):
    // await db.collection('subscribers').insert({ email, subscribedAt: new Date() });

    return res
      .status(200)
      .json({ message: "Successfully subscribed to newsletter!" });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

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
  } catch (err) {
    res.json("error deleting id " + err.message);
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
  const baseURL = process.env.BASEURL || "http://localhost:";
  console.log(`Server running on ${baseURL + PORT}`);
});
