const express = require("express");
const app = express();

// Load environment variables from .env file
require("dotenv").config();

// Middlewares
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Simple CI/CD Pipeline");
});

// Custom middlewares
app.use("/todos", todosRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
