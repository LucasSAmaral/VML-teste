angular.module('vml')
.controller('gitHubController', function($scope, $http){


    $http.get("https://api.github.com/users/globocom/repos")
        .then(function(response){
            var repoData = response.data;
            $scope.repos = repoData;
        });

         $scope.carregaCommits = function(repoName) {
            $http.get("https://api.github.com/repos/globocom/"+ repoName +"/commits")
                .then(function(response){
                    var commitData = response.data;
                    $scope.commits = commitData;
                    $scope.commitLength = $scope.commits.length;

                    if($scope.commitLength < 20) {
                        $('.btn-load-commits').hide();
                    }
                })
        }

        $scope.orderByName = function(name) {
            $scope.orderName = name;
        }

        $scope.indexNumber = 19;

        $scope.mostrarCommits = function() {
            if($scope.indexNumber < $scope.commitLength) {
                $scope.indexNumber = $scope.indexNumber + 20;
                if ($scope.indexNumber >= $scope.commitLength) {
                    $('.btn-load-commits').hide();    
                }
            }
        }
});