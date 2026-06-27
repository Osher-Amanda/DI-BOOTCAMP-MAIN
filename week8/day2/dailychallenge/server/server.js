const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// PART I
app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

// PART II
app.post("/api/world", (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const value = req.body.message;

  res.send(
    `I received your POST request. This is what you sent me: ${value}`
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});