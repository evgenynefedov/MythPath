const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_BASE_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY_VALUE = process.env.OPENAI_API_KEY;

router.post("/generateTale", async (req, res) => {
  try {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY_VALUE}`,
      },
    };

    const body = req.body;

    const ApiRes = await needle("post", `${API_BASE_URL}`, body, headers);
    const data = ApiRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
