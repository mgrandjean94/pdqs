namespace PDQS {

    angular.module('PDQS', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: PDQS.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: PDQS.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: PDQS.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: PDQS.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: PDQS.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: PDQS.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('process', {
                url: '/process',
                templateUrl: '/ngApp/views/process.html',
                controller: PDQS.Controllers.ProcessController,
                controllerAs: 'controller'
            })
            .state('property', {
                url: '/property',
                templateUrl: '/ngApp/views/property.html',
                controller: PDQS.Controllers.PropertyController,
                controllerAs: 'controller'
            })
            .state('personal', {
                url: '/personal',
                templateUrl: '/ngApp/views/personal.html',
                controller: PDQS.Controllers.PersonalController,
                controllerAs: 'controller'
            })            
            .state('info', {
                url: '/info',
                templateUrl: '/ngApp/views/info.html',
                controller: PDQS.Controllers.InfoController,
                controllerAs: 'controller'
            })  
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: PDQS.Controllers.ContactController,
                controllerAs: 'controller'
            })                   
            .state('contactus', {
                url: '/contactus',
                templateUrl: '/ngApp/views/contactus.html',
                controller: PDQS.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('new', {
                url: '/new',
                templateUrl: '/ngApp/views/new.html',
                controller: PDQS.Controllers.NewController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('PDQS').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('PDQS').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
