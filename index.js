const TelegramBot = require('node-telegram-bot-api');
const Handler = require('./handler');

const token = '232462923:AAEIimUDnetUqJEs16_73MvYiY066nHmLx0';

let bot = new TelegramBot(token, {polling: true});
let handler = new Handler();

bot.onText(/\/e (hello)/, function(msg, match) {
  handler.hello(match, bot, msg);
});

bot.onText(/(ru)/, function(msg, match) {
  handler.ru(bot, msg);
});

bot.onText(/(tip)/, function(msg, match) {
  handler.tip(bot, msg);
});
