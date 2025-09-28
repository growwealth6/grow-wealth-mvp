const express = require("express");
const db = require("../db");
const router = express.Router();

// Example endpoint to buy a machine
router.post("/buy", (req, res) => {
  const { userId, plan, amount, returns } = req.body;

  const stmt = db.prepare("INSERT INTO investments (userId, plan, amount, returns, status) VALUES (?, ?, ?, ?, ?)");
  stmt.run(userId, plan, amount, returns, "active", function (err) {
    if (err) return res.json({ message: "Error creating investment" });
    res.json({ message: "Investment successful" });
  });
});

module.exports = router;