const axios = require("axios");

async function Log(stack, level, pkg, message, token) {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    // silent fail
  }
}

module.exports = { Log };