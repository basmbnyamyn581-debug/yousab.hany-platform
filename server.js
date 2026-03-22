const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// 🔥 route التسجيل (POST)
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

// 🔥 route اختبار بالمتصفح
app.get("/api/auth/register", (req, res) => {
  res.send("REGISTER WORKS ✅🔥");
});

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
