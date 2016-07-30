const TelegramBot = require('node-telegram-bot-api');
const Handler = require('./handler');

const token = '232462923:AAEIimUDnetUqJEs16_73MvYiY066nHmLx0';

let bot = new TelegramBot(token, {polling: true});
let handler = new Handler(bot);

bot.onText(/\/e (.*)/, function(msg, match) {
  handler.hello(match, msg);
});

bot.onText(/(ru)/, function(msg, match) {
  handler.ru(msg);
});

bot.onText(/(tip)/, function(msg, match) {
  handler.tip(msg);
});

bot.onText(/What is (.*)/, function(msg, match) {
  handler.whatIs(msg, match);
});
