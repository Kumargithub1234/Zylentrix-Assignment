const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/users", require("./routes/userRouter"));
app.use("/api/tasks", require("./routes/taskRouter"));

// Server Start
app.listen( 5000, () => console.log('Server is listening on the port 5000'));
