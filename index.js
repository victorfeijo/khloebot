const TelegramBot = require('node-telegram-bot-api');
const Handler = require('./handler');

const token = process.env.API_KEY;
require('dotenv').config();
console.log(process.env);

let bot = new TelegramBot(token, {polling: true});
let handler = new Handler(bot);

bot.onText(/\/e (.*)/, (msg, match) => {
  handler.hello(match, msg);
});

bot.onText(/([Rr]u)/, (msg, match) => {
  handler.ru(msg);
});

bot.onText(/([Tt]ip)/, (msg, match) => {
  handler.tip(msg);
});

bot.onText(/[Ww]hat is (.*)/, (msg, match) => {
  handler.whatIs(msg, match);
});
