var TelegramBot = require('node-telegram-bot-api');
var Handler = require('./handler');

var token = '232462923:AAEIimUDnetUqJEs16_73MvYiY066nHmLx0';

var bot = new TelegramBot(token, {polling: true});
var handler = new Handler();

bot.onText(/\/e (hello)/, function(msg, match) {
  resp = handler.hello(match);
  bot.sendMessage(msg.from.id, resp);
});
