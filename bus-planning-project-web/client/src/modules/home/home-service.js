angular.module('wbd-data-viewer.home')
    .service('HomeService', function ($http) {
        'ngInject';


        this.timetables = [];
        this.employees = [];
        this.buses = [];
        this.busStopsOnRoute = [];
        this.routes = [];
        this.rides = [];

        //for creating new Ride        
         this.routeId = 1;
         this.timetableId = 1;
         this.rideDate = new Date();
         this.busId = 1;
         this.busStandardId = 1;
         this.employeesIds = [];

         this.newRide = {
            timetableId: this.timetableId,
            date:  this.rideDate,
            busId:  this.busId
        };

        this.updateNewRide = function() {
            this.newRide.timetableId = this.timetableId;
            this.newRide.rideDate = this.rideDate;
            this.newRide.busId = this.busId;
        };




        this.getRides = function () {
            return $http.get('http://localhost:9696/api/rides');
        };

        this.getTimetables = function (routeId) {
            return $http.get('http://localhost:9696/api/timetables/' + routeId);
        };

        this.getRoutes = function () {
            return $http.get('http://localhost:9696/api/routes');
        };

        this.getBusStopsForRoute = function (routeId) {
            return $http.get('http://localhost:9696/api/busStops/route/' + routeId);
        };

        this.getBusStopName = function (busStopId) {
            return $http.get('http://localhost:9696/api/busStop/' + busStopId);
        };

        this.getBusesByStandardId = function (standardId) {
            return $http.get('http://localhost:9696/api/buses/standard/' + standardId);
        };

        this.getFreeEmployees = function () {
            return $http.get('http://localhost:9696/api/employees/free');
        };

        this.saveRide = function (newRide) {
            return $http.post('http://localhost:9696/api/rides', newRide);
        };

        //we probably need also post on allocation :) with created rideId and workerId :)

        this.getBusStopsNames = function () {
            var a = [];
            this.routes.forEach(function (element) {
               $http.get('http://localhost:9696/api/busStops/route/' + element.id)
                .then(
                function successCallback(response) {
                    console.log('getBusStopsForRoute, successCallback response: ');
                    console.log(response);
                   a[element.id] = response.data;
                },
                function errorCallback(response) {
                    console.log('FAILED: getBusStopsForRoute, response: ');
                    console.log(response);
                });
            });
           this.busStopsOnRoute = a;
        return  this.busStopsOnRoute;
        };
    });