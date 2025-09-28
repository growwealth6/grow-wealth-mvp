const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const investmentRoutes = require("./routes/investment");
const referralRoutes = require("./routes/referral");

app.use("/api/auth", authRoutes);
app.use("/api/investment", investmentRoutes);
app.use("/api/referral", referralRoutes);

app.get("/", (req, res) => {
  res.send("Grow Wealth Investment API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));