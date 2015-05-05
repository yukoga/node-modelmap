var hashmap = require('hashmap'),
    glob = require('glob')
    ;

var _models = new hashmap();
var _load = function(path) {
  var _key = path.match(/\/([^\/]+)\.js$/)[1];
  _models.set(_key, require(path)());
}

module.exports.load = function(path) {
  if (path instanceof Array) {
    path.forEach(_load);
  } else if (typeof path == 'string' ) {
    if (path.match(/\*/) && path.match(/\*/)['index'] > 0) {
      glob.sync(path).forEach(_load);
    } else {
      _load(path);
    }
  }
  return _models;
}
