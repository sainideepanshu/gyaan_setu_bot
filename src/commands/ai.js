const axios = require("axios");

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
console.log("api key", process.env.OPENROUTER_API_KEY);

module.exports = async (ctx) => {
  const input = ctx.message.text.split(" ").slice(1).join(" ");
  if (!input) {
    return ctx.reply(
      "Please provide a question, e.g., /AI What is JavaScript?"
    );
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "X-Title": "MyTelegramBot",
        },
      }
    );
    const aiReply = response.data.choices[0].message.content;
    ctx.reply(aiReply);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    ctx.reply("AI is currently unavailable. Please try again later.");
  }
};
