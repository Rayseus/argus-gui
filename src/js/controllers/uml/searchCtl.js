angular.module('argus').controller('searchCtrl', [ '$scope','$location','$interval','ngDialog','Restangular',
		function($scope, $location,$interval, ngDialog, Restangular) {
	
	
			$scope.search = function() {
				$scope.initialized=false;
				console.dir("try to get result info use "+$scope.keywords);
				$scope.results = Restangular.all('s').getList({keyword:$scope.keywords}).$object;
				console.dir($scope.results);
				$scope.initialized=true;
			};
		
	
			$scope.edit = function(row) {			
				console.dir(row);
				$scope.title = "Edit";
				$scope.project = row.project;
				$scope.team=row.team;
				$scope.id=row.id;
				$scope.saml=row.saml;
				$scope.thumb=row.path;
				$scope.update=true;
				ngDialog.open({
					template : 'templates/create/index.html',
					scope : $scope
				});
			};			
			
			
			
			$scope.view = function(row) {				
				console.dir("try to get order info");
				$scope.projectName=row.project;
				if(row.path==undefined){					
					Restangular.one('http://localhost:9000/draw/png/'+row.id).get().then(function(data){
						$scope.thumb = data;						
						ngDialog.open({
							template : 'templates/search/view.html',
							scope : $scope
						});
						
					});	
				}else{
					$scope.thumb = row.path;	
					ngDialog.open({
						template : 'templates/search/view.html',
						scope : $scope
					});
					
				}		
			
		
				$scope.initialized=true;
			};
		
			$scope.query = function() {
				console.dir("try to get all info");
				$scope.results = Restangular.all('s').getList().$object;
				console.dir($scope);
				$scope.initialized=true;
            };  
            
            $scope.close=function(){
        	   this.closeThisDialog(0);    		
            };
            
            
            $scope.query();       
//            var timeout_upd = $interval($scope.query ,600000);//update each min         
//            $scope.$on('$destroy',function(){
//                $interval.cancel(timeout_upd);              
//
//            })
			
			

		} ]);