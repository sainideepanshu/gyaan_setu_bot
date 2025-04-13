const algorithms = require('../data/algorithm.json');

module.exports = (ctx) => {
    const input = ctx.message.text.split(' ').slice(1).join(' ');
    if (!input) {
        return ctx.reply('Please provide an algorithm name, e.g., /algorithm Bubble Sort');
    }
    const algorithm = algorithms[input.toLowerCase()];
    if (algorithm) {
        ctx.replyWithMarkdown(`*${input} Algorithm:*\n\`\`\`javascript\n${algorithm}\n\`\`\``);
    } else {
        ctx.reply('Algorithm not found. Try another name!');
    }
};