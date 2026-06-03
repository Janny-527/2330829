const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqYW5tZWV0c2luZ2g1MjdAZ21haWwuY29tIiwiZXhwIjoxNzgwNDgwMDgzLCJpYXQiOjE3ODA0NzkxODMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3NGI5YmM1My01NGFiLTQ0NzMtOTc3NS00ZDAzY2U5ZjBiOTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJqYW5tZWV0IHNpbmdoIiwic3ViIjoiYmFkNTE4OTItYTU1NC00NDFhLWJhZTQtMjZkNTljY2Q2ZWJlIn0sImVtYWlsIjoiamFubWVldHNpbmdoNTI3QGdtYWlsLmNvbSIsIm5hbWUiOiJqYW5tZWV0IHNpbmdoIiwicm9sbE5vIjoiMjMzMDgyOSIsImFjY2Vzc0NvZGUiOiJud3dzS3giLCJjbGllbnRJRCI6ImJhZDUxODkyLWE1NTQtNDQxYS1iYWU0LTI2ZDU5Y2NkNmViZSIsImNsaWVudFNlY3JldCI6Inl6c3dhZWhxSGZ2Zm1BbXoifQ.G8Z_ZPIq5ntcXExYa9dxtYUJ7HnldyOiYkS6FMLuixU";

async function Log(stack, level, pkg, message) {
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
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}

module.exports = { Log };