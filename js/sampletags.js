angular.module('sampleTags', []).directive('customdiv', function(){

    return {
        restrict : 'E',
        scope : {},
        controller : function($scope) {
            var ctrl = this;
            $scope.clickPlease = function(){
                alert('Thank you!');
            };
        },
        template : '<p>This is custom div place.<button ng-click="clickPlease()">clickPlease..</button></p>',
        replace : 'true'
    };
    
});