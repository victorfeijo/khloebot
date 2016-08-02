const request = require('request');

const mashapeHeaders = {
  "X-Mashape-Key": "zFM4272ikMmshzZ16RhJLcTqS7yAp1pcZR8jsnTZ9e5qld2aZn",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
};

class Handler {

  constructor(bot) {
    this.bot = bot;
  }

  hello(match, msg) {
    let resp = match[1];

    this.bot.sendMessage(msg.from.id, resp);
  };

  ru(msg) {
    let bot = this.bot;
    request('https://voucomerno.ru/menu.json', (error, response, body) => {
      if (!error && response.statusCode == 200){
        let menu = JSON.parse(body);

        if (!menu) {
          return bot.sendMessage(msg.from.id, 'No Results');
        }

        let parsedMenu = menu.main + '\n' +
                        menu.complement + '\n' +
                        menu.salad + '\n' +
                        menu.dessert;

        bot.sendMessage(msg.from.id, parsedMenu);
      }
      else {
        bot.sendMessage(msg.from.id, 'Failed :(')
      }
    })
  };

  tip(msg) {
    let bot = this.bot;
    request({
      headers: mashapeHeaders,
      uri: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      form: { cat: 'famous' },
      method: "POST"
    }, (error, response, body) => {
      if (!error && response.statusCode == 200){
        let tip = JSON.parse(body);

        if (!tip) {
          return bot.sendMessage(msg.from.id, 'No Results');
        }

        let parsedTip = tip.quote + '\n' +
                        'Author: ' + tip.author;

        bot.sendMessage(msg.from.id, parsedTip);
      }
      else {
        bot.sendMessage(msg.from.id, 'Failed :(');
      }
    })
  };

  whatIs(msg, match) {
    let bot = this.bot;
    request({
      headers: mashapeHeaders,
      uri: "https://duckduckgo-duckduckgo-zero-click-info.p.mashape.com/",
      form: { format: 'json', q: match[1] },
      method: "POST"
    }, (error, response, body) => {
      if (!error && response.statusCode == 200){
        let result = JSON.parse(body);

        if (!result.RelatedTopics[0]) {
          return bot.sendMessage(msg.from.id, 'No Results');
        }

        let parsedResult = result.RelatedTopics[0].Text;
        bot.sendMessage(msg.from.id, parsedResult);
      }
      else {
        bot.sendMessage(msg.from.id, 'Failed :(');
      }
    })
  };
};

module.exports = Handler;
