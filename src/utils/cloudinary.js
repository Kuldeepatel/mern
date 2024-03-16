// Importing necessary modules
import { v2 as cloudinary } from "cloudinary"; // Cloudinary SDK
import fs from "fs"; // File system module

// Configuring Cloudinary with credentials from environment variables
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        // Checking if localFilePath is provided
        if (!localFilePath) return null;

        // Uploading the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File uploaded successfully
        console.log("File is uploaded on Cloudinary", response.url);
        return response;
    } catch (error) {
        // Removing the locally saved temporary file as the upload operation failed
        fs.unlinkSync(localFilePath);
        return null;
    }
};

// Exporting the uploadOnCloudinary function
export { uploadOnCloudinary };

// Example usage of uploading a file directly to Cloudinary
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
