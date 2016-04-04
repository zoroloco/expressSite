function CamCommandSvc($http){
    var self = this;

    var cmd = {
      'baseAngle' : '',
      'camAngle'  : ''
    };

    self.moveBaseServo = function(angle){
      cmd.baseAngle = angle;
      cmd.camAngle  = '';
      $http.post('api/cam',cmd);
    },
    self.moveCamServo = function(angle){
      cmd.baseAngle = '';
      cmd.camAngle  = angle;
      $http.post('api/cam',cmd);
    }
}

angular.module('raspatron-module')
  .service('CamCommandSvc',['$http',CamCommandSvc]);
