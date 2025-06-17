const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE user_email = $1 AND user_password = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.json({
        success: true,
        message: "Login successful",
        role: user.user_role,
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
