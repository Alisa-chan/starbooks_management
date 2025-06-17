const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
