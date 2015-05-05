var modelmapper = require('../'),
    glob = require('glob')
    ;

var usermodel = modelmapper.load('./example/models/user.js');
console.log(usermodel);

// var models2 = modelmapper.load(['./example/models/user.js', './example/models/article.js']);
// console.log(models2);

// var models = modelmapper.load('./example/models/*.js');
// console.log(models);

