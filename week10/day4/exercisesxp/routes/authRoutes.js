const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = require("../data/users");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password required"
    });
  }

  const existingUser = users.find(
    (user) => user.username === username
  );

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword
  };

  users.push(newUser);

  const accessToken = jwt.sign(
    { username: newUser.username },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { username: newUser.username },
    "REFRESH_SECRET",
    { expiresIn: "7d" }
  );

  res.cookie("token", accessToken, {
    httpOnly: true
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true
  });

  res.status(201).json({
    message: "User registered successfully"
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username
  );

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    });
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    return res.status(400).json({
      message: "Invalid password"
    });
  }

  const accessToken = jwt.sign(
    { username: user.username },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    { username: user.username },
    "REFRESH_SECRET",
    { expiresIn: "7d" }
  );

  res.cookie("token", accessToken, {
    httpOnly: true
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true
  });

  res.json({
    message: "Login successful"
  });
});

router.get(
  "/protected",
  authenticateToken,
  (req, res) => {
    res.json({
      message: "Protected route accessed",
      user: req.user
    });
  }
);

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token missing"
    });
  }

  jwt.verify(
    refreshToken,
    "REFRESH_SECRET",
    (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid refresh token"
        });
      }

      const newAccessToken = jwt.sign(
        { username: user.username },
        "SECRET_KEY",
        { expiresIn: "1h" }
      );

      res.cookie("token", newAccessToken, {
        httpOnly: true
      });

      res.json({
        message: "Token refreshed"
      });
    }
  );
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("refreshToken");

  res.json({
    message: "Logged out successfully"
  });
});

module.exports = router;