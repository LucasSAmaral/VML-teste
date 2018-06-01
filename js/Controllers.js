angular.module('vml')
.controller('gitHubController', function($scope, $http){


    $http.get("https://api.github.com/users/globocom")
        .then(function(response){
            var data = response.data;
            $scope.user = data;
            carregarRepo();
        });

        var carregarRepo = function () {
            $http.get($scope.user.repos_url)
                .then(function(response){
                    var repoData = response.data;
                    $scope.repos = repoData;
                });
        }

        $scope.orderByName = function(n) {
            $scope.orderName = n;
        }
});