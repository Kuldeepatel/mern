// Class representing an API response
class ApiResponse {
   constructor(statusCode, data, message = 'Success') {
       // HTTP status code of the response
       this.statusCode = statusCode;
       
       // Data payload of the response
       this.data = data;
       
       // Message associated with the response (default: 'Success')
       this.message = message;
       
       // Boolean indicating whether the response represents success (status code < 400)
       this.success = statusCode < 400;
   }
}

// Exporting the ApiResponse class
export { ApiResponse };
