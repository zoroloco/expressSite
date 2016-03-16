var log = require(pathUtil.join(__dirname,'../../lib/logger.js'));

module.exports = function(app) {
    log.info("Creating routes.");
    //context root
    var index = require('../controllers/index.server.controller');
    var indexController = new index(app.get('properties'));
    app.get('/', indexController.render);
};
