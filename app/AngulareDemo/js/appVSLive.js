'use strict';


// Declare app level module which depends on filters, and services
angular.module('myAppVSLive', ['myAppVSLive.controllers', 'ngAnimate', 'ngRoute']).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/speakerIndex.html', controller: 'SpeakerController' });
    $routeProvider.when('/Speaker/:id', { templateUrl: 'views/speakerDetails.html', controller: 'SpeakerController' });
}]);
