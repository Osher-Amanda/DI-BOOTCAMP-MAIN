require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/stories", storyRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

const storyRoutes = require("./routes/storyRoutes");

app.use(express.json());

app.use("/stories", storyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});