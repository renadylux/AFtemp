angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.homePage', {
    url: '/homePage',
    views: {
      'tab1': {
        templateUrl: 'templates/homePage.html',
        controller: 'homePageCtrl'
      }
    }
  })

  .state('tabsController.explore', {
    url: '/explorePage',
    views: {
      'tab2': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
  })

  .state('tabsController.gachaPage', {
    url: '/gachaPage',
    views: {
      'tab3': {
        templateUrl: 'templates/gachaPage.html',
        controller: 'gachaPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.collection', {
    url: '/collectionPage',
    views: {
      'tab5': {
        templateUrl: 'templates/collection.html',
        controller: 'collectionCtrl'
      }
    }
  })

  .state('tabsController.setting', {
    url: '/settingPage',
    views: {
      'tab6': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('tabsController.question1', {
    url: '/fire/question1',
    views: {
      'tab2': {
        templateUrl: 'templates/question1.html',
        controller: 'question1Ctrl'
      }
    }
  })

  .state('tabsController.question2', {
    url: '/fire/question2',
    views: {
      'tab2': {
        templateUrl: 'templates/question2.html',
        controller: 'question2Ctrl'
      }
    }
  })

  .state('youWinACard', {
    url: '/fire/cardAwardpage',
    templateUrl: 'templates/youWinACard.html',
    controller: 'youWinACardCtrl'
  })

  .state('sorryYouLoose', {
    url: '/fireLosePage',
    templateUrl: 'templates/sorryYouLoose.html',
    controller: 'sorryYouLooseCtrl'
  })
  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })

$urlRouterProvider.otherwise('/intro')

  

});