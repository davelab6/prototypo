'use strict';

angular.module('prototypoApp', [
    'lodash',
    'ngRoute',
    'pasvaz.bindonce',

    'prototypo.fontLoader',
    'prototypo.valuesLoader',
    'prototypo.glyphFilters',
    'prototypo.glyphUtils',
    'prototypo.componentUtils',
    'prototypo.segmentUtils',
    'prototypo.glyphCache',

    'prototypo.glyphDirective',
    'prototypo.contourDirective',
    'prototypo.endpointDirective',
    'prototypo.prettySliderDirective',
    'prototypo.controlpointDirective'
  ])

  .config(function ( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });