const request = require('request');

let Handler = function() {};

Handler.prototype.hello = function(match, bot, msg) {
  let resp = match[1];

  bot.sendMessage(msg.from.id, resp);
};

Handler.prototype.ru = function(bot, msg) {
  request('https://voucomerno.ru/menu.json', function(error, response, body) {
    if (!error && response.statusCode == 200){
      let menu = JSON.parse(body);
      let parsedMenu = menu.main + '\n' +
                       menu.complement + '\n' +
                       menu.salad + '\n' +
                       menu.dessert

      bot.sendMessage(msg.from.id, parsedMenu);
    }
    else {
      bot.sendMessage(msg.from.id, 'Failed :(')
    }
  })
};

module.exports = Handler;
