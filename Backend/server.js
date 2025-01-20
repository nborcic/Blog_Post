import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection.js"
import reservationRoutes from "./Schema/reservation.js";

dotenv.config();

const app = express();


app.use(express.json());

connectDB();

// Routes
app.use("/api/reservations", reservationRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Server error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
