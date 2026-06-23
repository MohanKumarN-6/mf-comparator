const { getFundsFromAPI } = require("../services/mfServices");

const getAllFunds = async (req, res) => {
  try {
    console.log("Request received");

    const funds = await getFundsFromAPI();

    console.log("Funds fetched");

    res.json({
      success: true,
      count: funds.length,
      data: funds.slice(0, 10)
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllFunds
};