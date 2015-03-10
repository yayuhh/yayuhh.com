var Site = require('broccoli-taco');
var site = new Site();

site.basePath = 'site';

module.exports = site.toTree();

