'use strict';
var app;

app = angular.module('gettingThingsDone', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('homepage', {
    url: '/:locale',
    controller: 'HomepageCtrl',
    templateUrl: 'homepage.html'
  });
  return $urlRouterProvider.otherwise('/fr');
});

app.run(function($rootScope, $state) {
  return $rootScope.$state = $state;
});

app.controller('HomepageCtrl', function($scope) {
  $scope.ideas = [
    {
      name: "Awful idea",
      value: -1
    }, {
      name: "Weak idea",
      value: 1
    }, {
      name: "So-so idea",
      value: 5
    }, {
      name: "Good idea",
      value: 10
    }, {
      name: "Great idea",
      value: 15
    }, {
      name: "Brilliant idea",
      value: 20
    }
  ];
  $scope.selectedIdea = $scope.ideas[2];
  $scope.executions = [
    {
      name: "No execution",
      value: 1
    }, {
      name: "Weak execution",
      value: 1000
    }, {
      name: "So-so execution",
      value: 10000
    }, {
      name: "Good execution",
      value: 100000
    }, {
      name: "Great execution",
      value: 1000000
    }, {
      name: "Brilliant execution",
      value: 10000000
    }
  ];
  return $scope.selectedExecution = $scope.executions[3];
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app.factory('Task', function(Parse) {
  var Task;
  return Task = (function(_super) {
    __extends(Task, _super);

    function Task() {
      return Task.__super__.constructor.apply(this, arguments);
    }

    Task.configure("Task", "title");

    return Task;

  })(Parse.Model);
});
