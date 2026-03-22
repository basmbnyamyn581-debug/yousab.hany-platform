const express = require("express");
const router = express.Router();

// تسجيل حساب
router.post("/register", (req, res) => {
  const { name, phone, parentPhone, password } = req.body;

  if (!name || !phone || !parentPhone || !password) {
    return res.status(400).json({ message: "كمل البيانات ❌" });
  }

  console.log("User Registered:", req.body);

  res.json({
    message: "تم إنشاء الحساب بنجاح ✅",
    user: { name, phone, parentPhone }
  });
});

// تسجيل دخول
router.post("/login", (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: "كمل البيانات ❌" });
  }

  res.json({
    message: "تم تسجيل الدخول ✅",
    token: "test-token"
  });
});

module.exports = router;
