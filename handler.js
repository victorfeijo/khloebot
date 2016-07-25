const request = require('request');
var Handler = function() {};

Handler.prototype.hello = function(match) {
  var resp = match[1];

  return resp;
};

Handler.prototype.ru = function() {
  request('https://ru.legat.ml/?json', function(error, response, body) {
    if (!error && response.statusCode == 200){
        return JSON.parse(body);
    }

    return 'error?';
  })
};

module.exports = Handler;
