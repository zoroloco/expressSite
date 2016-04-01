// public/js/controllers/MainCtrl.js
angular.module('raspatron-web', ['angularRangeSlider']).
  controller('CamController',function() {
    var self = this;
    //init the slider
    this.camSliderValue  = 90;
    this.baseSliderValue = 90;

    this.dragstop   = true;
    this.low        = 0;
    this.high       = 180;



  });
