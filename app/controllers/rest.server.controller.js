var log = require(pathUtil.join(__dirname,'../../lib/logger.js'));

module.exports = RestController;

function RestController(properties){

  if(this instanceof RestController === false){
    throw new TypeError("Classes can't be function-called.");
  }

  var self = this;
  this._properties = properties;

  RestController.prototype.render = function(req,res){
    log.info("Restful server got a request.");

    res.render('rest', {
      title : "restFul endpoint",
    })
  }
}
