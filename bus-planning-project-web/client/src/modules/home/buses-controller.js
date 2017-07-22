angular.module('wbd-data-viewer.home')
    .controller('BusesController', function ($scope, $state, HomeService) {
        'ngInject';

        $scope.buses = HomeService.buses;
        $scope.selectedBus = HomeService.busId;


        $scope.$watch(
            function () { return HomeService.busId; },
            function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.selectedBus = HomeService.busId;
                }
            });


        $scope.selectBus = function (bus) {
            HomeService.busId = bus.id;
        };


        $scope.back = function () {
            $state.go('home.timetables');
        };

        $scope.goToEmployeesSelection = function () {
            HomeService.getFreeEmployees()
                .then(
                function successCallback(response) {
                    console.log('getFreeEmployees, successCallback response: ');
                    console.log(response);
                    HomeService.employees = response.data;
                    $state.go('home.employees');
                },
                function errorCallback(response) {
                    console.log('FAILED: getFreeEmployees, response: ' + response);
                });
        };

    });