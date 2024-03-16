// Importing necessary modules
import express from "express"; // Express framework
import cors from "cors"; // CORS middleware
import cookieParser from "cookie-parser"; // Cookie parser middleware

// Creating an instance of Express
const app = express();

// Configuring CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allowing specific origin(s) defined in environment variable
    credentials: true // Allowing credentials (cookies, authorization headers)
}));

// Parsing JSON requests and limiting payload size to 16kb
app.use(express.json({ limit: "16kb" }));

// Parsing URL-encoded requests and limiting payload size to 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serving static files from the "public" directory
app.use(express.static("public"));

// Using cookie parser middleware
app.use(cookieParser());

// routes import
import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users",userRouter)

// Exporting the Express app
export { app };
