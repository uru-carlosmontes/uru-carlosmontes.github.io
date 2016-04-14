/**
 * Created by Carlos on 03/11/2015.
 */

var app = angular.module("uru.carlosmontes", [
    "ui.router"
]);

app.config(["$stateProvider", "$urlRouterProvider",

    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $urlRouterProvider.when("/home", "/home/welcome");

        $stateProvider
            .state("home", {
                "url": "/home",
                "templateUrl": "app/modules/home/templates/home.template.html",
                "controller": "HomeCtrl"
            })
            .state("home.welcome", {
                "url": "/welcome",
                "templateUrl": "app/modules/home/templates/welcome.template.html"
            })
            .state("home.progI", {
                "url": "/programing-I",
                "templateUrl": "app/modules/programing-i/templates/programing-i.template.html"
            })
            .state("home.progI.introduction", {
                "url": "/introduction",
                "templateUrl": "app/modules/programing-i/templates/programing-i-introduction.template.html"
            })
            .state("home.progI.problems", {
                "url": "/problems",
                "templateUrl": "app/modules/programing-i/templates/programin-i-problems.template.html"
            })
            .state("home.poo", {
                "url": "/poo",
                "templateUrl": "app/modules/poo/templates/poo.template.html"
            });

    }

]);