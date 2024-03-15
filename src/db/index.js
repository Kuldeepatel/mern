import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async() => {
    try{
        const connectinInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected at port ${connectinInstance.connection.host}`);
    }catch(error) {
        console.log("MONGODB connection FAILED",error);
        process.exit(1);
    }
}

export default connectDB;