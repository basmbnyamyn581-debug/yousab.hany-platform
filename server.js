const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// اتصال قاعدة البيانات
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB Connected ✅"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));

// Test
app.get("/", (req, res) => {
  res.send("🚀 منصة المهندس يوساب هاني شغالة");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
