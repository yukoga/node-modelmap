var hashmap = require('hashmap'),
    $ = require('jquery'),
    glob = require('glob')
    ;

var _models = new hashmap();
var _load = function(path) {
  var _key = path.match(/\/([^\/]+)\.js$/)[1];
  models.set(_key, require(path)());
}

module.exports.load = function(path) {
  if (path instanceof Array) {
    _load(path);
  } else if (typeof path == 'string' ) {
    $.each(path, _load);
  }
  return _models;
}
