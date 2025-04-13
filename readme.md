# Telegram Bot using `telegraph.js`

## Overview
This project is a **feature-rich Telegram bot** built using `telegraph.js` and Node.js. The bot provides various functionalities such as sending jokes, fetching algorithm code, playing songs, AI-powered responses, and handling unrecognized commands. Users can also stop their session temporarily without stopping the bot for everyone.

---

## Features
- **Joke Bot**: Sends a random joke when prompted.
- **Algorithm Helper**: Takes the name of an algorithm (e.g., "Bubble Sort", "Quick Sort") and returns its JavaScript implementation.
- **Song Player**: Plays a full song according to your interest if available online; otherwise, returns "Song not found".
- **AI Chatbot**: Responds intelligently to user queries using a free AI model.
- **Unrecognized Command Handling**: Guides users when they enter invalid commands.
- **User Session Management**: Allows users to stop their session without shutting down the bot.
- **Auto Session Resume**: Users can reconnect after a set time (default: 2 minutes).

---

## Prerequisites
Before running the bot, ensure you have:
- **Node.js** installed (Download from [Node.js official site](https://nodejs.org/))
- **An NPM account**
- **A Telegram bot token** (Create one via BotFather on Telegram)
- **API keys for AI and music search** (if you want to implement)

---

## Installation & Setup
Follow these steps to install and set up the bot:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/DEVnitishOfficial/All_Backend_Project.git
cd telegram-bot
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add:
```
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
OPENROUTER_API_KEY=your-ai-api-key
```

### 4️⃣ Run the Bot
```sh
node src/index.js
```

---

## Available Commands
| Command         | Description |
|----------------|-------------|
| `/start`       | Provides a welcome message |
| `/joke`        | Sends a random joke |
| `/algorithm <name>` | Returns JavaScript code for the given algorithm |
| `/song <name>` | Plays the song for 10 seconds if available, else returns "Not found" |
| `/AI <query>`  | Generates a response using an AI model |
| `/stop`        | Stops the session for the user, allowing them to return later |





