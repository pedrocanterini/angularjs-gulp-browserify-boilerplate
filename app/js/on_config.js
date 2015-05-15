'use strict';

/**
 * @ngInject
 */
function OnConfig( $stateProvider, $locationProvider, $urlRouterProvider ) {

    $locationProvider.html5Mode( true );

    $stateProvider
        .state( 'Home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        } )
        .state( 'Campaign', {
            url: '/campaign',
            controller: 'CanpaignCtrl as campaign',
            templateUrl: 'campaign.html',
            title: 'Campaign'
        } );

    $urlRouterProvider.otherwise( '/' );

}

module.exports = OnConfig;