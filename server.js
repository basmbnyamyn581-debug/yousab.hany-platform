const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 🔥 مهم: اطبع لوج علشان نتأكد
console.log("Loading routes...");

// routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// 🔥 test route تاني للتأكد
app.get("/test", (req, res) => {
  res.send("Auth route should work");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
