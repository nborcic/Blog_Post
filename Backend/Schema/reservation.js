import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Reservation details
    roomNumber: { type: Number, required: true }, // Room being reserved
    start: { type: Date, required: true }, // Reservation start date
    end: { type: Date, required: true }, // Reservation end date
    status: { type: String, enum: ["reserved", "free", "overdue"], default: "reserved" }, // Room status
});

module.exports = mongoose.model("Reservation", reservationSchema);

const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

// Get all reservations
router.get("/", async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// Add a new reservation
router.post("/", async (req, res) => {
    const { title, roomNumber, start, end } = req.body;

    try {
        const newReservation = new Reservation({ title, roomNumber, start, end });
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (err) {
        res.status(400).json({ error: "Invalid reservation data" });
    }
});

// Update a reservation
router.put("/:id", async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedReservation);
    } catch (err) {
        res.status(400).json({ error: "Invalid reservation ID" });
    }
});

// Delete a reservation
router.delete("/:id", async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: "Reservation deleted" });
    } catch (err) {
        res.status(400).json({ error: "Invalid reservation ID" });
    }
});

module.exports = router;
