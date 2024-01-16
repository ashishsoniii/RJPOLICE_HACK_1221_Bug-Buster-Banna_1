const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWares/errorMiddleware");
const cookieParser = require("cookie-parser");
const app = express();
const adminRoutes = require("./routes/adminRoute");

const feedbackRoute = require("./routes/feedbackRoutes");
const firRoutes = require("./routes/firRoutes");
const pollRoutes = require("./routes/pollRoutes");
const emailRoutes = require("./routes/emailRoutes");
const recipientsRoutes = require("./routes/recipientsRoutes");
const chatbotRoutes=require("./routes/chatbotRoutes");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001","https://mediafiles.botpress.cloud/20c18406-2457-49d9-a33e-a518622f23ed/webchat/bot.html"],
    credentials: true,
  })
);


// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/admin", adminRoutes);

app.use("/api/efir", firRoutes);

app.use("/api/poll", pollRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/getemails", recipientsRoutes);

app.use("/api/chatbot",chatbotRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Raj Police backend");
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
