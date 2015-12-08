var App = angular.module("sportsites", []);

App.controller("SitesCtrl", function($scope, $http) {
    $scope.showData = function() {

        $http.get('json/sportsites.json').then(function(res){
            $scope.sites = res.data;
        });

        $scope.categoryIncludes = [];
        $scope.includeSportType = function(category) {
            var i = $.inArray(category, $scope.categoryIncludes);
            if (i > -1) {
                $scope.categoryIncludes.splice(i, 1);
            } else {
                $scope.categoryIncludes.push(category);
            }
        };
        
        $scope.sitesFilter = function(sites) {
            if ($scope.categoryIncludes.length > 0) {
                if ($.inArray(sites.category, $scope.categoryIncludes) < 0)
                    return;
            }        
            return sites;
        };
    };
});