'use strict';

/* Controllers */

angular.module('myAppVSLive.controllers', []).
  controller('SpeakerController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

      $log.log("In Speaker Controller");

      $scope.showstuds = true;

      $scope.speakers = [
        {
            'id': '1',
            'name': 'Ben Hoelting',
            'company': 'Aspenware',
            'title': 'Director of Technoology',
            'stud': 'true'
        },
        {
            'id': '2',
            'name': 'Ted Neward',
            'company': 'iTellis',
            'title': 'CTO',
            'stud': 'false'
        },  
        {
            'id': '3',
            'name': 'Ely Lucas',
            'company': 'Aspenware',
            'title': 'Senior Dev',
            'stud': 'true'
        }
      ];

      $scope.selectedEmployee = $routeParams.id;

  }]);