var Handler = function() {};

Handler.prototype.hello = function(match) {
  var resp = match[1];

  return resp;
};

module.exports = Handler;
