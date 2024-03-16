// Importing mongoose for MongoDB connection
import mongoose from "mongoose";

// Importing the database name constant
import { DB_NAME } from "../constants.js";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Attempting to connect to MongoDB
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        // Logging successful connection message
        console.log(`MongoDB connected at port ${connectionInstance.connection.host}`);
    } catch (error) {
        // Handling connection errors
        console.log("MONGODB connection FAILED", error);
        process.exit(1); // Exiting the process if connection fails
    }
};

// Exporting the connectDB function
export default connectDB;
