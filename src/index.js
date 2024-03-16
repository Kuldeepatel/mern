// Importing necessary modules
import dotenv from "dotenv"; // Module for handling environment variables
import connectDB from "./db/index.js"; // Module for connecting to MongoDB
import {app} from './app.js'
// Configuring dotenv to read variables from .env file
dotenv.config({path :'./env'});

// Connecting to MongoDB
connectDB()
    .then(() => {
        // Starting the server
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        // Handling MongoDB connection failure
        console.log("MongoDB connection failed", err);
    });
