const axios = require("axios");
const { Log } = require("../../../logging_middleware");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const BASE_URL = "http://4.224.186.213/evaluation-service";

async function fetchNotifications(limit, page, notification_type) {
  try {
    await Log(
      "backend",
      "info",
      "service",
      `Fetching notifications`,
      ACCESS_TOKEN
    );

    const params = {};
    if (limit) params.limit = limit;
    if (page) params.page = page;
    if (notification_type) params.notification_type = notification_type;

    console.log("Token being used:", ACCESS_TOKEN); // debug line

    const response = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
      params: params
    });

    await Log(
      "backend",
      "info",
      "service",
      `Notifications fetched successfully`,
      ACCESS_TOKEN
    );

    return response.data;

  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      `Failed to fetch: ${error.message}`,
      ACCESS_TOKEN
    );
    console.log("Full error:", error.response?.data);
    throw error;
  }
}

module.exports = { fetchNotifications };