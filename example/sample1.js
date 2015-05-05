var modelmapper = require('../'),
    glob = require('glob')
    ;

var usermodel = modelmapper.load('./example/models/user.js');
console.log(usermodel.get('user')[0].name);

var models2 = modelmapper.load(['./example/models/user.js', './example/models/article.js']);
console.log(models2.get('article')[1].title);

var models = modelmapper.load('./example/models/*.js');
console.log(models.get('article')[0].index.chap1);

