var pathUtil = require('path'),
    net      = require('net'),
    _        = require('underscore'),
    log      = require(pathUtil.join(__dirname,'./logger.js'));

    function TcpClient(tcpClientOptions){
    	var self      = this;
      this._options = tcpClientOptions;
      this._client;

    	TcpClient.prototype.shutdown = function(cb){
    		log.warn("Shutting down tcp client.");
        if(!_.isEmpty(self._client)){

        }
    	}

    	TcpClient.prototype.connect = function(){
        log.info("Establishing connection to TCP server:"+self._options);

        self._client = net.createConnection({host: self._options.remoteHost,
                                             port: self._options.remotePort}, () => {
          log.info("Connected to server!");

          self._client.on('data', (data) =>{
            log.info("Received data from TCP server:"+data);
          });

          self._client.on('end', () => {
            log.info("TCP client disconnected from the server.");
          });
        });
    	}//connect

      TcpClient.prototype.send = function(data){
        log.info("Sending "+data+" to TCP server.");
        self._client.write(data);
      }

    }//TcpClient

    module.exports = TcpClient;
