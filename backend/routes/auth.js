const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const pool = require("../config/db");
require("dotenv").config();


// can load this from process.env in production
const SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE user_email = $1 AND user_password = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      // Generate JWT Token
      const token = jwt.sign(
        { userId: user.user_id, role: user.user_role },
        SECRET,
        { expiresIn: "1h" } // expires in 1 hour
      );

      res.json({
        success: true,
        message: "Login successful",
        token,               // include the token
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
