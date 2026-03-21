const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// تسجيل حساب جديد
router.post("/register", async (req, res) => {
  const { name, phone, parentPhone, password } = req.body;

  if (!name || !phone || !parentPhone || !password) {
    return res.status(400).send("كمل كل البيانات ❌");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      phone,
      parentPhone,
      password: hashedPassword
    });

    await user.save();

    res.send("تم إنشاء الحساب ✅");
  } catch (err) {
    res.status(400).send("الرقم مستخدم قبل كده ❌");
  }
});

// تسجيل دخول
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  const user = await User.findOne({ phone });
  if (!user) return res.status(400).send("المستخدم غير موجود ❌");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send("كلمة السر غلط ❌");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({
    message: "تم تسجيل الدخول ✅",
    token
  });
});

module.exports = router;
