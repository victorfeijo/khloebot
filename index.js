const TelegramBot = require('node-telegram-bot-api');
const Handler = require('./handler');

var token = '232462923:AAEIimUDnetUqJEs16_73MvYiY066nHmLx0';

var bot = new TelegramBot(token, {polling: true});
var handler = new Handler();

bot.onText(/\/e (hello)/, function(msg, match) {
  handler.hello(match, bot, msg);
});

bot.onText(/(ru)/, function(msg, match) {
  handler.ru(bot, msg);
});
