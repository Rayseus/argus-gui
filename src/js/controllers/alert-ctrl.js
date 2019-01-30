/**
 * Alerts Controller
 */

angular
    .module('argus')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'Welcome to Argus system!'
    }/** , {
        type: 'danger',
        msg: 'Found a bug? Create an issue with as many details as you can.'
    }*/

];

    $scope.addAlert = function(content) {
        $scope.alerts.push({
            msg: content
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}