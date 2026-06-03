const express = require("express");
const router = express.Router();
const {
  getAllNotifications,
  getNotificationById
} = require("../controllers/notification.controller");

// GET all notifications
router.get("/", getAllNotifications);

// GET single notification
router.get("/:id", getNotificationById);

module.exports = router;