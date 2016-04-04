angular.module('raspatron-module', ['ngMaterial']).
  controller('CamController',['$log','CamCommandSvc',function($log,camCommandSvc) {
    var self = this;
    //init the slider
    this.camSliderValue  = 90;
    this.baseSliderValue = 90;

    self.moveBase = function(){
      $log.log("Base angle now at:"+self.baseSliderValue);
      camCommandSvc.moveBaseServo(self.baseSliderValue);
    }

    self.moveCam = function(){
      $log.log("Cam angle now at:"+self.camSliderValue);
      camCommandSvc.moveCamServo(self.camSliderValue);
    }

  }]);
