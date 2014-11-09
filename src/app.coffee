'use strict'

app = angular.module 'gettingThingsDone', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'app.templates'
  'Parse'
]

app.config (
  $stateProvider
  $urlRouterProvider
) ->

  $stateProvider
  .state 'homepage',
    url: '/:locale'
    controller: 'HomepageCtrl'
    templateUrl: 'homepage.html'

  $urlRouterProvider.otherwise '/fr'

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
