angular.module('sampleApp', ['sampleTags'])
    .service('sampleService', function(){
      return {
          'serviceId' : 1,
          'description' : 'get data from service.'
      };     
    })
    .controller('sampleController', function(sampleService){
        var sampleCtrl = this;
        sampleCtrl.message = 'This message from controller.';
        
        sampleCtrl.clickme = function() {
            alert('You click me!');
        };
        
        sampleCtrl.visible = true;
        
        sampleCtrl.switchVisible = function() {
            sampleCtrl.visible = !sampleCtrl.visible;
        };
        
        sampleCtrl.getData = function() {
            sampleCtrl.service = sampleService;
        };
    });
