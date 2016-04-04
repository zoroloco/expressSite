var pathUtil  = require('path'),
    _        = require('underscore'),
    log       = require(pathUtil.join(__dirname,'../../lib/logger.js')),
    tcpClient = require(pathUtil.join(__dirname,'../../lib/tcpClient.js'));

module.exports = RoboController;

function RoboController(properties){

  if(this instanceof RoboController === false){
    throw new TypeError("Classes can't be function-called.");
  }

  var self = this;
  this._properties = properties;
  this._client = new tcpClient(this._properties.tcpClient);

  this._client.connect();

  RoboController.prototype.processCmd = function(req,res){
    log.info("RoboController received a request: "+JSON.stringify(req.body));

    if(!_.isEmpty(self._client) &&
       !_.isEmpty(req.body)){

      if(_.isNumber(req.body.baseAngle)){
        self._client.send("9:"+req.body.baseAngle);
      }
      else if(_.isNumber(req.body.camAngle)){
        self._client.send("10:"+req.body.camAngle);
      }
    }
  }
}
