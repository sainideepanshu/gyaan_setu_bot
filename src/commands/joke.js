const axios = require('axios');

module.exports = async (ctx) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
        // console.log(response.data)
        ctx.reply(`Audience : ${response.data.type} \n Statement : ${response.data.setup}\n Punchline : ${response.data.punchline}`);
    } catch (error) {
        ctx.reply('Oops! Could not fetch a joke at the moment.');
    }
};