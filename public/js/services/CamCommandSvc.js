function CamCommandSvc(){
  var baseAngle = 0;
  var neckAngle = 0;

  this.moveBaseServo = function(degrees){

  };
  this.moveCamServo = function(degrees){

  };

}

angular.module('raspatron-web',[])
  .service('CamCommandSvc',[CamCommandSvc]);
