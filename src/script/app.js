angular.module('app', ['ngRoute'])

.directive('section', [
function() {
    return {
        restrict: 'E',
        templateUrl: './src/template/section.html',
        scope: {
            title: '@',
            src: '@',
            href: '@'
        }
    };
}
])

;
