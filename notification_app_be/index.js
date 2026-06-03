const app = require("./src/app");
const { Log } = require("../logging_middleware");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await Log(
    "backend",
    "info",
    "service",
    `Server started on port ${PORT}`
  );
  console.log(`Server running on http://localhost:${PORT}`);
});