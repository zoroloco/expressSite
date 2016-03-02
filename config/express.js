var express = require('express');
module.exports = function(properties) {
    var app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.set('properties', properties);
    require('../app/routes/index.server.routes.js')(app);
    return app;
};
