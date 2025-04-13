const play = require("play-dl");

module.exports = async (ctx) => {
    const input = ctx.message.text.split(' ').slice(1).join(' ');
    if (!input) {
        return ctx.reply("Please provide a song name, e.g., /song All is well");
    }

    try {
        // Search for the song
        let searchResults = await play.search(input, { limit: 1 });
        if (!searchResults.length) {
            return ctx.reply("Song not found. Try another one!");
        }

        const songUrl = searchResults[0].url;

        // Reply with song link
        ctx.reply(`🎵 Playing *${searchResults[0].title}* for you my dear...\n[Listen Here](${songUrl})`, { parse_mode: "Markdown" });

    } catch (error) {
        console.error(error);
        ctx.reply("Error fetching song. Please try again later.");
    }
};
