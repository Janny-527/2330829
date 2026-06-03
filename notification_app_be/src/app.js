const express = require("express");
const cors = require("cors");
const { Log } = require("../../logging_middleware");
const notificationRoutes = require("./routes/notification.route");

require("dotenv").config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  await Log(
    "backend",
    "info",
    "middleware",
    `${req.method} ${req.path} called`,
    ACCESS_TOKEN
  );
  next();
});

app.use("/api/notifications", notificationRoutes);

app.get("/", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "Health check accessed",
    ACCESS_TOKEN
  );
  res.json({ message: "Notification Backend Running!" });
});

module.exports = app;