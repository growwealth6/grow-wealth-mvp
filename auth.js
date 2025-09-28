const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
const router = express.Router();

const secret = "mysecret";

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const stmt = db.prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
  stmt.run(name, email, hashedPassword, function (err) {
    if (err) return res.json({ message: "User already exists" });
    res.json({ message: "Registration successful" });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (!user) return res.json({ message: "User not found" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  });
});

module.exports = router;