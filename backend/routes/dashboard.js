const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const authorizeRole = require("../middleware/role");

// User dashboard
router.get("/user", authenticateToken, authorizeRole(["user"]), (req, res) => {
  res.json({ message: "Welcome to the User Dashboard" });
});

// Admin dashboard
router.get("/admin", authenticateToken, authorizeRole(["admin"]), (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

// IT Super Admin dashboard
router.get("/it", authenticateToken, authorizeRole(["it"]), (req, res) => {
  res.json({ message: "Welcome to the IT Super Admin Dashboard" });
});

module.exports = router;
