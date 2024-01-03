const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWares/errorMiddleware");
const cookieParser = require("cookie-parser");
const app = express();
const adminRoutes = require('./routes/adminRoute');

const feedbackRoute = require("./routes/feedbackRoutes");
const firRoutes=require("./routes/firRoutes");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/feedback", feedbackRoute);
app.use('/admin', adminRoutes);

app.use("/api/efir",firRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("instagram backend");
});

// Error Middleware
app.use(errorHandler);

// connect to DB
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));