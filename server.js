const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Simple CI/CD Pipeline");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
