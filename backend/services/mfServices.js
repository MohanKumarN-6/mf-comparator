const axios = require("axios");

const getFundsFromAPI = async () => {
  console.log("Calling MF API...");

  const response = await axios.get(
    "https://api.mfapi.in/mf"
  );

  console.log("Received response from MF API");

  return response.data;
};

module.exports = {
  getFundsFromAPI
};