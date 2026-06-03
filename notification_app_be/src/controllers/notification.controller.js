const { fetchNotifications } = require("../services/notification.service");
const { Log } = require("../../../logging_middleware");

async function getAllNotifications(req, res) {
  try {
    await Log("backend", "info", "controller", "getAllNotifications called");

    const { limit, page, notification_type } = req.query;
    const data = await fetchNotifications(limit, page, notification_type);

    await Log("backend", "info", "controller", "getAllNotifications success");
    res.status(200).json(data);

  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      `getAllNotifications failed: ${error.message}`
    );
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
}

async function getNotificationById(req, res) {
  try {
    const { id } = req.params;
    await Log("backend", "info", "controller", `getNotificationById id:${id}`);

    const data = await fetchNotifications();
    const notification = data.notifications.find(n => n.ID === id);

    if (!notification) {
      await Log("backend", "warn", "controller", `Notification not found id:${id}`);
      return res.status(404).json({ error: "Notification not found" });
    }

    res.status(200).json(notification);

  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      `getNotificationById failed: ${error.message}`
    );
    res.status(500).json({ error: "Failed to fetch notification" });
  }
}

module.exports = {
  getAllNotifications,
  getNotificationById
};