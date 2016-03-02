pathUtil     = require('path'),
server       = require(pathUtil.join(__dirname,'../server.js'));

//use the local test conf.json with your own parameters.
var myServer = new server(require(pathUtil.join(__dirname,'./conf.json')));

//write any custom testing automation here.

myServer.start();
