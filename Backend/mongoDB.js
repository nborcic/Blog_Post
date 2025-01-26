import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.db.namespace}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default DB;