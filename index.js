var hashmap = require('hashmap'),
    glob = require('glob')
    ;

var _models = new hashmap();
var _load = function(path) {
  console.log('path is : ' + path);
  var _key = path.match(/\/([^\/]+)\.js$/)[1];
  console.log('_key is : ' + _key);
  _models.set(_key, require(path)());
  console.log(_models[_key]);
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
