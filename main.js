 
// Code goes here

var app= angular.module('myApp',['ngRoute','ngAnimate','ui.bootstrap']);

app.config(function($routeProvider){

    $routeProvider
     .when('/home',{
 templateUrl : 'pages/home.html',
        controller : 'CarouselDemoCtrl'
    })
    .when('/aboutUs',{
 templateUrl : 'pages/aboutUs.html'
    })
    .when('/contactUs',{
 templateUrl : 'pages/contactUs.html'
    })
    
     .when('/',{
 templateUrl : 'pages/home.html'
    })
     .when('/feedback',{
        templateUrl : 'pages/feedback.html'
    })
})


app.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 'Melbourne' + slides.length; 
            slides.push({
      image: 'images/carousel/' + newWidth+'.jpg' ,
      text: ['Night','Explore','City'][slides.length % 3] + ' ' +
        ['Life', 'Melbourne', 'streets'][slides.length % 3]
    });
    };
    for (var i=1; i<4; i++) {
    $scope.addSlide();
  }
});


app.directive('placeTile', function($window){
    return{
        restrict: 'A',
        scope:{
            place: '='
        },
        templateUrl:'templates/place-tile-template.html',
        link: function(scope){
            scope.moreInfo = function(id){
                
                switch(id) {
    case 1:
       $window.location.href = 'https://en.wikipedia.org/wiki/Great_Ocean_Road';
        break;
    case 2:
 $window.location.href = 'https://en.wikipedia.org/wiki/Phillip_Island';
         break;
     case 3:
 $window.location.href = 'https://en.wikipedia.org/wiki/Queen_Victoria_Market';
        break;
     case 4:
 $window.location.href = 'https://en.wikipedia.org/wiki/Melbourne';
break;
}           
              
            }
        }
    };
});

app.controller('MostVisited',function($scope, $http){
    $http.get('json/mostVisitedPlaces.json')
        .success(function(response){
        $scope.mostVisitedPlaces = response.mostVisitedPlaces;
    });
  });
app.controller('tabController',function($scope, $location){
   this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
});

 

app.controller('formCtrl',["$scope", function ($scope) {
                                        $scope.countries = ['India', 'United States'];
                                        $scope.$watch('form.country', function (newVal) {
                                            if (newVal ==='India')
                                                $scope.states = ['Karnataka', 'Maharashtra', 'Andra Pradesh'];
                                            if (newVal ==='United States')
                                                $scope.states = ['California', 'Mississippi'];
                                        });
                                        $scope.$watch('form.state', function (newVal) {
                                            if (newVal=== 'Karnataka')
                                                $scope.cities = ['Bangalore', 'Hubli', 'Belgaum'];
                                            if (newVal=== 'Maharashtra')
                                                $scope.cities = ['Pune', 'Mumbai'];
                                             if (newVal=== 'Andra Pradesh')
                                                $scope.cities = ['Hyderabad', 'Vizac'];
                                            if (newVal=== 'California')
                                                $scope.cities = ['Los Angeles', 'Santa Barbara'];
                                            if (newVal=== 'Mississippi')
                                                $scope.cities = ['Jackson', 'Oxford'];
                                        });
   
    this.submit = function(formData , validity){
    
        if (validity)
            {
                alert("submitting"+ JSON.stringify(formData));
            }
    }
}]);

app.controller('bookingFormCtrl',function(){
    this.submit =function(formData , validity){
        
        if(validity){
            alert("submitted Successfully");
        }
    }
});

 app.controller('feedbackCtrl',function($scope){
     this.submit = function(data,valid){
         if(valid)
             {
                 alert("Thank you for your Valuable Feedback");
                $scope.feedForm.$setPristine();
             }
     }
    
 });
app.controller('bookingCtrl',function($scope){
    this.submit=function(data,valid){
         if(valid)
             {
                 alert("Thank You for the Booking.... ");
                $scope.feedForm.$setPristine();
             }
    }
})