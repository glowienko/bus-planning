angular.module('wbd-data-viewer.home')
    .controller('HomeController', function ($scope, $state, HomeService) {
        'ngInject';


        //from api (database)
        $scope.rides = getRides();

        // $scope.addNewEmployee = function (employee) {
        //     HomeService.employees.push(employee);
        // };

        function getRides() {
            HomeService.getRides()
                .then(
                function successCallback(response) {
                    console.log(response);
                    HomeService.rides = response.data;
                    return response.data;
                },
                function errorCallback(response) {
                    console.log('FAILED: getRides, response: ' + response);
                });
        }

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