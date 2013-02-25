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

    $routeProvider.when('/ui/buttons', {templateUrl: 'tutorials/ui/buttons.html', controller: MyCtrl2});
    $routeProvider.when('/ui/list-view', {templateUrl: 'tutorials/ui/list-view.html', controller: MyCtrl2});

    $routeProvider.when('/playing/play-track', {templateUrl: 'tutorials/playing/play-track.html', controller: MyCtrl2});
    $routeProvider.when('/playing/play-list-track', {templateUrl: 'tutorials/playing/play-list-track.html', controller: MyCtrl2});
    $routeProvider.when('/playing/current-track', {templateUrl: 'tutorials/playing/current-track.html', controller: MyCtrl2});
    $routeProvider.when('/playing/click-to-play', {templateUrl: 'tutorials/playing/click-to-play.html', controller: MyCtrl2});
    $routeProvider.when('/playing/skip-track', {templateUrl: 'tutorials/playing/skip-track.html', controller: MyCtrl2});
    $routeProvider.when('/playing/star-track', {templateUrl: 'tutorials/playing/star-track.html', controller: MyCtrl2});
    $routeProvider.when('/playing/user-toplist', {templateUrl: 'tutorials/playing/user-toplist.html', controller: MyCtrl2});


    $routeProvider.when('/search/search', {templateUrl: 'tutorials/search/search.html', controller: MyCtrl2});
    $routeProvider.when('/search/search-albums-artist', {templateUrl: 'tutorials/search/search-albums-artist.html', controller: MyCtrl2});

    $routeProvider.when('/playlist/add-track-playlist', {templateUrl: 'tutorials/playlist/add-track-playlist.html', controller: MyCtrl2});
    $routeProvider.when('/playlist/get-tracks-from-playlist', {templateUrl: 'tutorials/playlist/get-tracks-from-playlist.html', controller: MyCtrl2});
    $routeProvider.when('/playlist/subscribe', {templateUrl: 'tutorials/playlist/subscribe.html', controller: MyCtrl2});
    $routeProvider.when('/playlist/playlist-mosaic', {templateUrl: 'tutorials/playlist/playlist-mosaic.html', controller: MyCtrl2});

    $routeProvider.when('/facebook/facebook-auth', {templateUrl: 'tutorials/facebook/facebook-auth.html', controller: MyCtrl2});
    $routeProvider.when('/facebook/facebook-listening-history', {templateUrl: 'tutorials/facebook/facebook-listening-history', controller: MyCtrl2});

    $routeProvider.when('/experimental/twitter', {templateUrl: 'tutorials/experimental/twitter.html', controller: MyCtrl2});
    $routeProvider.when('/experimental/echonest', {templateUrl: 'tutorials/experimental/echonest.html', controller: MyCtrl2});
    $routeProvider.when('/experimental/polymaps', {templateUrl: 'tutorials/experimental/polymaps.html', controller: MyCtrl2});
    $routeProvider.when('/experimental/google_maps', {templateUrl: 'tutorials/experimental/google_maps.html', controller: MyCtrl2});

  }]);
