'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/getting-started/manifest', {templateUrl: 'tutorials/getting-started/manifest.html', controller: MyCtrl2});
    $routeProvider.when('/getting-started/arguments', {templateUrl: 'tutorials/getting-started/arguments.html', controller: MyCtrl2});
    $routeProvider.when('/getting-started/drag-drop', {templateUrl: 'tutorials/getting-started/drag-drop.html', controller: MyCtrl2});
    $routeProvider.when('/getting-started/share', {templateUrl: 'tutorials/getting-started/share.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
