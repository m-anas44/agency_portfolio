const { google } = require("googleapis");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json());

// Load the service account key
const credentials = require("./agency-newsletter-46f9505ae0a9.json"); // Replace with the path to your key file

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

app.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }

  try {
    // Append email to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1SPYRPEwD-jD8CzfNEAKEj2t9LV0fVd6darLYLJ7vbGY",
      range: "Sheet1!A1", // Assuming you're adding emails to the first column of Sheet1
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });

    res.status(200).send({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error writing to Google Sheet:", error);
    res.status(500).send({ message: "Failed to subscribe" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
