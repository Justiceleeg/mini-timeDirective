angular.module('timeApp')
    .directive('inputField', function() {

        return {
            restrict: 'E',
            templateUrl: 'views/inputField.html',
            scope: {
                buttonText: '@',
                whenClicked: '&' //function binding
            }
        }

    })
