'use strict';
var app;

app = angular.module('angularGithubPages', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.templates', 'Parse']);

app.config(function($stateProvider, $urlRouterProvider, ParseProvider) {
  $stateProvider.state('homepage', {
    url: '/:locale',
    controller: 'HomepageCtrl',
    templateUrl: 'homepage.html'
  }).state('task', {
    url: '/:locale/task',
    controller: 'TaskCtrl',
    templateUrl: 'task.html'
  });
  $urlRouterProvider.otherwise('/fr');
  return ParseProvider.initialize("vddnO2njYyRbe3wv8JTHQ4H9AqPdy2aGTvQA78z5", "yiVsEe22Tjm3iJYG2DYX08pUA3Z1Jf7t36NMVZ9p");
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

app.controller('TaskCtrl', function($scope, Task) {
  Task.query().then(function(tasks) {
    return $scope.tasks = tasks;
  });
  $scope.newTask = new Task;
  $scope.addTask = function() {
    return $scope.newTask.save().then(function(task) {
      $scope.tasks.push(task);
      return $scope.newTask = new Task;
    });
  };
  $scope.removeTask = function(task) {
    return task.destroy().then(function() {
      return _.remove($scope.tasks, function(task) {
        return task.objectId === null;
      });
    });
  };
  $scope.editingTask = function(task) {
    return task.editing = true;
  };
  $scope.editTask = function(task) {
    task.save();
    return task.editing = false;
  };
  return $scope.cancelEditing = function(task) {
    task.title = task._cache.title;
    return task.editing = false;
  };
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
