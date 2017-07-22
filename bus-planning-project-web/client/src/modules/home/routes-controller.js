angular.module('wbd-data-viewer.home')
    .controller('RoutesController', function($scope, $state, HomeService) {
        'ngInject';


        $scope.busStopsOnRoute = HomeService.getBusStopsNames();
        $scope.routes = HomeService.routes;
        $scope.selectedRoute = HomeService.routeId;


        $scope.$watch(
            function() { return HomeService.routeId; },
            function(newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.selectedRoute = HomeService.routeId;
                }
            });

        $scope.selectRoute = function(route) {
            HomeService.routeId = route.id;
        };


        $scope.goToTimetablesSelection = function() {
            HomeService.getTimetables(HomeService.routeId)
                .then(
                function successCallback(response) {
                    console.log('getTimetables,successCallback response: ' + response);
                    HomeService.timetables = response.data;
                    $state.go('home.timetables');
                },
                function errorCallback(response) {
                    console.log('FAILED: getTimetables, response: ' + response);
                });
        };


    });