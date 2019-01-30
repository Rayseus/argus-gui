angular.module('argus').controller('dashboardCtrl', [ '$scope','$location', 'Restangular','$interval',
		function($scope, $location, Restangular,$interval) {
	

			$scope.query = function() {
				console.dir("try to get overview info");
				$scope.overview = Restangular.one('overview').get().$object;
				$scope.initialized=true;
            };       
            $scope.query();       
            var timeout_upd = $interval($scope.query ,60000);//update each min         
            $scope.$on('$destroy',function(){
                $interval.cancel(timeout_upd);              

            })

		} ]);