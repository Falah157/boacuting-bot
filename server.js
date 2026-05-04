require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(express.static('public'));

bot.start((ctx) => ctx.reply('Welcome Falah Manager!', {
    reply_markup: { inline_keyboard: [[{ text: "💎 Open Dashboard", web_app: { url: process.env.APP_URL } }]] }
}));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000. Use Ctrl+C to stop.");
    bot.launch();
});
