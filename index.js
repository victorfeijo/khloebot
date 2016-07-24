var TelegramBot = require('node-telegram-bot-api');

var token = '232462923:AAEIimUDnetUqJEs16_73MvYiY066nHmLx0';

// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, function(msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});
