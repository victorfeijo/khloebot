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

Handler.prototype.tip = function(bot, msg) {
  request({
    headers: {
      "X-Mashape-Key": "zFM4272ikMmshzZ16RhJLcTqS7yAp1pcZR8jsnTZ9e5qld2aZn",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
             ,
             uri: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
             methid: "POST"
  }, function(err, res, body) {
    console.log(body)
  })
};

module.exports = Handler;
