const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route to handle input from the frontend and send it to OpenAI
router.post("/ask", async (req, res) => {
  const { question } = req.body;
  const apiURL = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post(
      apiURL,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
        max_tokens: 500,
        temperature: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const messageContent = response.data.choices[0].message.content;
    res.send(messageContent);
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response.data);
    res.status(500).send("Failed to fetch response from OpenAI");
  }
});

module.exports = router;
