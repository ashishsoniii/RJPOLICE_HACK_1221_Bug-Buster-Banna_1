const express = require("express");
const router = express.Router();
const { sendEmail } = require("./sendEmail");
const { EmailLog } = require("../models/emailLogSchema");

// Route to send emails
router.post("/send", async (req, res) => {
  const { recipients, subject, html } = req.body;

  try {
    const emailPromises = recipients.map(async (to) => {
      const isSuccess = await sendEmail(to, subject, html);

      // Log information about the sent email
      const emailLog = new EmailLog({
        to,
        subject,
        content: html,
        isSuccess,
      });

      await emailLog.save();

      return { to, isSuccess };
    });

    const emailResults = await Promise.all(emailPromises);

    return res
      .status(200)
      .json({ success: true, message: "Emails sent successfully", data: emailResults });
  } catch (error) {
    console.error("Error sending emails: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// Route to get a list of sent emails
router.get("/logs", async (req, res) => {
  try {
    const emailLogs = await EmailLog.find().sort({ sentAt: -1 });

    return res.status(200).json({ success: true, data: emailLogs });
  } catch (error) {
    console.error("Error fetching email logs: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
