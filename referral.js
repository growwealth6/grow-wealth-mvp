const express = require("express");
const db = require("../db");
const router = express.Router();

// Add referral bonus when referee invests
router.post("/add", (req, res) => {
  const { referrerId, refereeId } = req.body;

  db.run("INSERT INTO referrals (referrerId, refereeId) VALUES (?, ?)", [referrerId, refereeId], (err) => {
    if (err) return res.json({ message: "Error adding referral" });

    // Add 3000 bonus to referrer wallet
    db.run("UPDATE users SET wallet = wallet + 3000 WHERE id = ?", [referrerId]);
    res.json({ message: "Referral bonus added" });
  });
});

module.exports = router;