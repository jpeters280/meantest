var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    
    .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'Home'
    })
    .when('/new_question', {
        templateUrl: '/partials/new_question.html',
        controller: 'NewQuestion',
    })
    .when('/question/:id', {
        templateUrl: '/partials/question.html',
        controller: 'Answers',
    })
    .when('/question/:id/new_answer', {
        templateUrl: '/partials/new_answer.html',
        controller: 'NewAnswer',
    })
    
    .otherwise({
        redirectTo: '/'
    });
});