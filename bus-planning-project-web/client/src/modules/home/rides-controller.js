angular.module('wbd-data-viewer.home')
    .controller('RidesController', function ($scope, $state, HomeService) {
        'ngInject';


        $scope.rides = HomeService.rides;


        $scope.$watch(
            function () { return HomeService.rides; },
            function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.rides = HomeService.ride;
                }
            });


        $scope.addRide = function () {
            $scope.goToRoutesSelection();
        };

        $scope.goToRoutesSelection = function () {
            HomeService.getRoutes()
                .then(
                function successCallback(response) {
                    console.log('getRoutes , successCallback response: ');
                    console.log(response);
                    HomeService.routes = angular.copy(response.data);
                    $state.go('home.routes');
                },
                function errorCallback(response) {
                    console.log('FAILED: getRoutes, response: ' + response);
                });
        };


    });