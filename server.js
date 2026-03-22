const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ الراوت هنا مباشرة (بدون routes folder)
app.post("/api/auth/register", (req, res) => {
  const { name, phone, parentPhone, password } = req.body;

  if (!name || !phone || !parentPhone || !password) {
    return res.status(400).json({ message: "كمل البيانات ❌" });
  }

  res.json({
    message: "تم إنشاء الحساب بنجاح ✅",
    user: { name, phone, parentPhone }
  });
});

// test
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
