angular.module('argus').controller('createCtrl', [ '$scope','$location','$interval','ngDialog','Restangular',
		function($scope, $location,$interval, ngDialog, Restangular) {
			
			$scope.create = function() {				
				console.dir("try to save data "+$scope.code);
				console.log('data: ', $scope)
				var png=Restangular.all("http://localhost:9000/draw/png");
				var postdata={project:$scope.project,saml:$scope.saml,team:$scope.team};
				png.post(postdata).then(function(data){
					$scope.thumb = data;				
				});			
		
				$scope.initialized=true;
			};
		

			
			

		} ]);