angular.module('wbd-data-viewer.home')
    .controller('TimetableController', function ($scope, $state, HomeService) {
        'ngInject';

        $scope.timetables = HomeService.timetables;
        $scope.busStopsOnRoute = HomeService.getBusStopsNames();
        $scope.selectedTimetable = HomeService.timetableId;
        $scope.routeId = HomeService.routeId;
        $scope.selectedBusStandard = HomeService.busStandardId;

        $scope.$watch(
            function () { return HomeService.timetableId; },
            function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.selectedTimetable = HomeService.timetableId;
                }
            });

        $scope.$watch(
            function () { return HomeService.busStandardId; },
            function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.selectedBusStandard = HomeService.busStandardId;
                }
            });


        $scope.selectTimetable = function (timetable) {
            HomeService.timetableId = timetable.id;
            HomeService.busStandardId = timetable.busStandardId;
        };

        
        $scope.back = function () {
           $state.go('home.routes');
        };

        $scope.goToBusSelection = function () {
            HomeService.getBusesByStandardId(HomeService.busStandardId)
                .then(
                function successCallback(response) {
                    console.log('getBusesByStandardId, successCallback response: ');
                    console.log(response);
                    HomeService.buses = response.data;
                    $state.go('home.buses');

                },
                function errorCallback(response) {
                    console.log('FAILED: getBusesByStandardId, response: ');
                    console.log(response);
                });
        };
    });