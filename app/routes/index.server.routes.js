var log = require(pathUtil.join(__dirname,'../../lib/logger.js'));

module.exports = function(app) {
    log.info("Creating routes.");
    //context root
    var index = require('../controllers/index.server.controller');
    var indexController = new index(app.get('properties'));
    app.get('/', indexController.render);

    //robo api
    var robo = require('../controllers/robo.server.controller');
    var roboController = new robo(app.get('properties'));
    app.post('/robo', roboController.processCmd);
};
