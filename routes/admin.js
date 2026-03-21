const express = require("express");
const router = express.Router();
const User = require("../models/User");

// أرقام الأستاذ (Admin)
const admins = ["01287800627", "01202591476"];

// Middleware يتحقق إن ده أستاذ
function isAdmin(req, res, next) {
  const phone = req.headers.phone;

  if (!admins.includes(phone)) {
    return res.status(403).send("مش مسموح ❌");
  }

  next();
}

// عرض كل الطلاب
router.get("/users", isAdmin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// حذف طالب
router.delete("/user/:id", isAdmin, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("تم حذف الطالب ✅");
});

module.exports = router;
