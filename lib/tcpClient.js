var pathUtil = require('path'),
    net      = require('net'),
    _        = require('underscore'),
    log      = require(pathUtil.join(__dirname,'./logger.js'));

    function TcpClient(host,port){
    	var self     = this;
      this._host   = host;
      this._port   = port;
      this._client;

    	TcpServer.prototype.shutdown = function(cb){
    		log.warn("Shutting down tcp client.");
        if(!_.isEmpty(self._client)){

        }
    	}

    	TcpServer.prototype.connect = function(onConnection,onReceiveData,onServerError){


    	}//connect

    }//TcpClient

    module.exports = TcpClient;
