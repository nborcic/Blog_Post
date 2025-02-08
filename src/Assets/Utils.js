import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const fetchEvents = async (link) => {
    const response = await fetch(`http://localhost:5001/api/events/`);
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
export const handleDeleteEvent = async (link, metod, files) => {
    const response = await fetch(`${link}`, {
        method: metod,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(files),
    });
    console.log(response, "response of delete");
    return await response.json();

};


export default { fetchEvents, addEvent, handleDeleteEvent };