const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Fetch all records (GET)
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM AddMou");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching AddMou records:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new record (POST)
router.post("/", async (req, res) => {
  const {
    institutional_name,
    address,
    recipient_name,
    institution_type,
    i_code,
    sex,
    email_add,
    contact_number,
    province,
    date_of_deployment,
    year_distributed_number,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO addmou (
        institutional_name, address, recipient_name, institution_type, i_code,
        sex, email_add, contact_number, province, date_of_deployment, year_distributed_number
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [
        institutional_name,
        address,
        recipient_name,
        institution_type,
        i_code,
        sex,
        email_add,
        contact_number,
        province,
        date_of_deployment,
        year_distributed_number,
      ]
    );

    res.status(201).json({ message: "Record added", data: result.rows[0] });
  } catch (err) {
    console.error("Error inserting AddMou record:", err);
    res.status(500).json({ error: "Failed to insert record" });
  }
});

module.exports = router;
