const { Telegraf } = require("telegraf");
const jokeHandler = require("./commands/joke");
const algorithmHandler = require("./commands/algorithm");
const songHandler = require("./commands/song");
const aiHandler = require("./commands/ai");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Store users who stopped their session
const stoppedUsers = new Set();

bot.start((ctx) => {
  ctx.reply(
    "Welcome! Use /start to see available commands:\n" +
      "/joke - Get a joke\n" +
      "/algorithm <name> - Get an algorithm\n" +
      "/song <name> - Play a song\n" +
      "/AI - Ask anything\n" +
      "/stop - Stop your session"
  );
});

// checking if a user’s session is stopped using middleware
const sessionGuard = (ctx, next) => {
  const userId = ctx.from.id;

  if (stoppedUsers.has(userId)) {
    return ctx.reply("🚫 Your session is paused. Try again later at least after 2 minutes or later.");
  }

  return next();
};

// Apply session guard to commands
bot.command("joke", sessionGuard, jokeHandler);
bot.command("algorithm", sessionGuard, (ctx) => algorithmHandler(ctx));
bot.command("song", sessionGuard, (ctx) => songHandler(ctx));
bot.command("AI", sessionGuard, aiHandler);

bot.command("stop", (ctx) => {
  const userId = ctx.from.id;

  if (stoppedUsers.has(userId)) {
    return ctx.reply(
      "🚫 You have already stopped your session."
    );
  }

  stoppedUsers.add(userId);
  ctx.reply("🛑 You have stopped your session. You can return in 2 minutes.");

  setTimeout(() => {
    stoppedUsers.delete(userId);
  }, 2 * 60 * 1000);
});

// Global message handler to prevent interaction if user stopped the session
bot.on("text", (ctx) => {
  const userId = ctx.from.id;

  if (stoppedUsers.has(userId)) {
    return ctx.reply("🚫 Your session is paused. Try again later.");
  }

  ctx.reply("❌ Unrecognized command. Try /start to see available options.");
});

// Start bot
bot.launch();
console.log("Bot is running...");

// Stop bot when process exits (Ctrl+C or hosting provider shutdown)
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
