var log = require(pathUtil.join(__dirname,'../../lib/logger.js'));

module.exports = function(app) {
    log.info("Creating routes.");
    //context root
    var index = require('../controllers/index.server.controller');
    var indexController = new index(app.get('properties'));
    app.get('/', indexController.render);

    //restful url
    var rest = require('../controllers/rest.server.controller');
    var restController = new rest(app.get('properties'));
    app.get(app.get('properties').path, restController.render);
};
