function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API request (replace this with your actual API call)
    setTimeout(() => {
      const success = true; // Simulate a successful response
      if (success) {
        const response = { data: 'API response data' }; // Replace with your API response
        resolve(response); // Resolve the Promise with the response data
      } else {
        const error = new Error('API request failed'); // Create an error object
        reject(error); // Reject the Promise with the error
      }
    }, 1000); // Simulate a 1-second delay (adjust as needed)
  });
}
