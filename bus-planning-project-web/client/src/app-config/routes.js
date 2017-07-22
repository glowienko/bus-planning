angular.module('wbd-data-viewer')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'modules/home/home.html',
				controller: 'HomeController'
			})
			.state('home.intro', {
				url: '/intro',
				templateUrl: 'modules/home/views/intro.html',
				controller: 'HomeController'

			})



			.state('home.rides', {
				url: '/rides',
				templateUrl: 'modules/home/views/rides.html',
				controller: 'RidesController'
			})
			.state('home.timetables', {
				url: '/timetables',
				templateUrl: 'modules/home/views/timetables.html',
				controller: 'TimetableController'
			})
			.state('home.routes', {
				url: '/routes',
				templateUrl: 'modules/home/views/routes.html',
				controller: 'RoutesController'
			})
			.state('home.buses', {
				url: '/buses',
				templateUrl: 'modules/home/views/buses.html',
				controller: 'BusesController'
			})
			.state('home.employees', {
				url: '/employees',
				templateUrl: 'modules/home/views/employees.html',
				controller: 'EmployeesController'
			});

		$urlRouterProvider.otherwise('/home/intro');
	}]);