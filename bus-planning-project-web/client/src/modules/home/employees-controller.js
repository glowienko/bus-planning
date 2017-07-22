angular.module('wbd-data-viewer.home')
    .controller('EmployeesController', function ($scope, $state, HomeService) {
        'ngInject';


        $scope.employees = HomeService.employees;
        $scope.selectedEmployees = [];


        $scope.$watch(
            function () { return HomeService.routeId; },
            function (newValue, oldValue, scope) {
                if (newValue !== oldValue) {
                    scope.selectedRoute = HomeService.routeId;
                }
            });

        $scope.back = function () {
            $state.go('home.buses');
        };

        $scope.addEmployee = function (employee) {
            $scope.selectedEmployees.push(employee);
        };


        $scope.createRide = function () {

            HomeService.updateNewRide();

            HomeService.saveRide(HomeService.newRide)
                .then(
                function successCallback(response) {
                    console.log('getFreeEmployees, successCallback response: ');
                    console.log(response);
                    HomeService.getRides()
                        .then(
                        function successCallback(response) {
                            console.log('getFreeEmployees, successCallback response: ');
                            console.log(response);
                            HomeService.rides = response.data;
                            $state.go('home.rides');
                        },
                        function errorCallback(response) {
                            console.log('FAILED: getFreeEmployees, response: ' + response);
                        });
                },
                function errorCallback(response) {
                    console.log('FAILED: getFreeEmployees, response: ' + response);
                });


        };


    });