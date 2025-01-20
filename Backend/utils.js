export const fetchEvents = async () => {
    const response = await fetch("http://localhost:5000/reservations");
    return await response.json();
};

export const addEvent = async (event) => {
    const response = await fetch("http://localhost:5000/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
    });
    return await response.json();
};

export default { fetchEvents, addEvent };