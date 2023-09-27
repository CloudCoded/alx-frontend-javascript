import axios from 'axios';

function getResponseFromAPI() {
  // Replace these variables with your actual API endpoint and request parameters
  const apiUrl = 'https://api.example.com/your-endpoint';
  const requestData = {
    // Your request data here
  };

  return new Promise((resolve, reject) => {
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        // Check if the API response contains the data you need
        if (response && response.data) {
          resolve(response.data); // Resolve with API response data
        } else {
          reject('Error: API response does not contain data');
        }
      })
      .catch((error) => {
        reject(`Error: API call failed - ${error.message}`);
      });
  });
}

export default getResponseFromAPI;
