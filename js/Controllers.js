angular.module('vml')
.controller('gitHubController', function($scope, $http){


    $http.get("https://api.github.com/users/globocom/repos")
        .then(function(response){
            var repoData = response.data;
            $scope.repos = repoData;
            // começo get commits
            $.each(repoData, function(i, obj){
                var commitsURL = obj.commits_url.split('{/sha}')[0];
                
                $http.get(commitsURL)
                    .then(function(response){
                        var commitData = response.data;
                        console.log(commitData);
                    });
            });
            // fim get commits
        });

        $scope.orderByName = function(n) {
            $scope.orderName = n;
        }
});