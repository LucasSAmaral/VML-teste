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
                })
        }

        $scope.orderByName = function(n) {
            $scope.orderName = n;
        }
});