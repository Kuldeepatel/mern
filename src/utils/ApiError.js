// Custom API Error class extending Error
class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code for the error
        message = "Something went wrong", // Default error message
        errors = [], // Optional array of error details
        stack = "" // Optional stack trace
    ){
        super(message); // Call the parent constructor with the message

        // Setting custom properties for the error object
        this.statusCode = statusCode; // HTTP status code
        this.data = null; // Additional data (if needed)
        this.message = message; // Error message
        this.success = false; // Indicates failure
        this.errors = errors; // Detailed error messages (if any)

        // Customizing the stack trace if provided
        if(stack){
            this.stack = stack; // Use provided stack trace
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture stack trace
        }
    }
}

// Exporting the ApiError class
export { ApiError };
