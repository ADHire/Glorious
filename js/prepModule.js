// Module created and named
var app = angular.module('prepModule', ['ngRoute', 'ngStorage']);
var loggedIn = false;

// Routing and view switching
app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: "/views/login/login.html",
    controller: 'routeCtrlShow', 
  });
    $routeProvider.when('/login', {
    templateUrl: "/views/login/login.html",
    controller: 'routeCtrlShow'
  });
    $routeProvider.when('/profile', {
    templateUrl: "/views/profile/profile.html",
    controller: 'routeCtrlShow'
  });
    $routeProvider.when('/myPrep', {
    templateUrl: "/views/myPrep/myPrep.html",
    controller: 'routeCtrlShow'
  });
    $routeProvider.when('/companyInfo', {
    templateUrl: "/views/companyInfo/companyInfo.html",
    controller: 'routeCtrlShow'
  });
    $routeProvider.when('/companyLists', {
    templateUrl: "/views/companyLists/companyLists.html",
    controller: 'routeCtrlShow'
  });
    $routeProvider.when('/company/:index', {
    templateUrl: "/views/companyTemplate.html",
    controller: 'routeCtrlShow'
  });
});

app.factory('loginServ', function() {

  var google = {
    name: "Google",
    status: "Hiring",
    size: "Big",
    location: "California",
    jobDesc: "Awesome",
    salary: "Huge",
    wants: "You",
    bonusSkills: "PHP",
    industry: "Tech",
    product: "Awesome Code"
  };
  var instagram = {
    name: "Instagram",
    status: "Hiring",
    size: "Huge",
    location: "New York",
    jobDesc: "Fabulous",
    salary: "Small",
    wants: "Amazing People!",
    bonusSkills: "Photoshop",
    industry: "Tech",
    product: "Awesome Code"
  };
  var nutshell = {
    name: "Nutshell",
    status: "No Positions Open",
    size: "Small",
    location: "California",
    jobDesc: "Okay",
    salary: "Moderate",
    wants: "Bodies",
    bonusSkills: "C",
    industry: "Tech",
    product: "Awesome Code"
  };
  var apple = {
    name: "Apple",
    status: "Accepting Resumes",
    size: "Huge",
    location: "California",
    jobDesc: "Pretty Cool",
    salary: "Moderate",
    wants: "Ninjas",
    bonusSkills: "Ruby",
    industry: "Tech",
    product: "Awesome Code"
  };
  var yahoo = {
    name: "Yahoo",
    status: "No Positions Open",
    size: "Small",
    location: "California",
    jobDesc: "Okay",
    salary: "Small",
    wants: "Rockstars",
    bonusSkills: "C+",
    industry: "Tech",
    product: "Awesome Code"
  };
  var grandCircus = {
    name: "Grand Circus",
    status: "Waiting on interview",
    size: "Small",
    location: "Detroit, Michigan",
    jobDesc: "Becoming the most amazing instructor this camp has ever seen.",
    salary: "$1,000,000",
    wants: "Godly coders",
    bonusSkills: "Being able to crush your work",
    industry: "Tech",
    product: "Grand Circus is passionate about training people for amazing careers in tech and helping local businesses grow by hiring local tech superstars. Our bootcamps serve both purposes: we give people critical skills for tech jobs while introducing them to businesses looking for talent."
  };

  var companies = [grandCircus, google, apple, instagram, nutshell, yahoo];
  console.log(companies); 
  return companies;
});

// Controller for data
app.controller("routeCtrlShow", function($scope, $routeParams, $localStorage, $http, loginServ) {
  $scope.companies = loginServ;
  Object.assign($scope, loginServ[$routeParams.index]);


    // Taylor
    $scope.taylorFirstName = "Taylor";
    $scope.taylorLastName = "Swift";
    $scope.taylorEmail = "taylorswift@gmail.com";
    $scope.taylorEducation = "Grand Circus, Detroit";
    $scope.taylorJobTitle = "Greatest female ever";
    $scope.taylorSkills = "Everything";

  // Login that displays info after correct information is passed/checked
  $scope.ballinLogIn=function() {
    console.log("swift");
      var tSwift = {
    firstName: 'Taylor',
    lastName: 'Swift',
    email: 'taylorswift@gmail.com',
    education: 'Grand Circus, Detroit',
    jobTitle: 'Greatest female ever',
    skills: 'Everything'
  };
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value === "taylorswift" && password.value === "taylorswift") {
      console.log("ok lets do this");
      alert("Welcome");
      load("#/profile");
      loggedIn = true;
    } else  {
        alert("Please enter correct information");
      }
  };
    function load(url) {
    location.href = url;
  }

  // Unstretch API stuff
  $scope.pictures = [];
  $http  ({
    method: 'GET',
    url: 'https://api.unsplash.com/photos/?client_id=67726f5ad542c14d61f2e484786f72da4cf6bf5f772a6a058719c14f14459649'
  }).then(function successCallback(response) {
    response.data.forEach(function(element) {
    $scope.pictures.push(element.urls.regular);
    });
  }, function errorCallback(response) {
     });
  var myVar = setInterval(myTimer, 10000);
  var current = 0;
  function myTimer() {
    var tag = $scope.pictures[current];
    var container = document.getElementById("foo");
    if (current == $scope.pictures.length - 1) {
      current = 0;
    } else  {
        current++;
      }
  }

  // Stops the Unstretch
  // function myStopFunction() {
  //   clearInterval(intervalID);
  // }
  // if (loggedIn === true) {
  //   myStopFunction();
  // }

  // Adds a company and the div/info
  $scope.addCompany = function() {
    var newCompanyName = {};
    newCompanyName.name =  $scope.newCompany;
    newCompanyName.status = $scope.newStatus;
    newCompanyName.size = $scope.newSize;
    newCompanyName.location = $scope.newLocation;
    newCompanyName.jobDesc = $scope.newJobDescription;
    newCompanyName.salary = $scope.newSalary;
    newCompanyName.wants = $scope.newWants;
    newCompanyName.bonusSkills = $scope.newBonusSkills;
    newCompanyName.industry = $scope.newIndustry;
    newCompanyName.product = $scope.newProduct;

    $scope.companies.push(newCompanyName);
  };

  });
  
  // Google+ SignIn Stuff --- don't change please
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

  // Google+ SignOut Stuff --- don't change please
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  // Directive to make the new divs
  app.directive('coke', function () {
    return {
      restrict:'AE',
      transclude:true,
      scope:  true,
      templateUrl:'views/companyLists/newCompanyListTemplate.html',
      replace:true,
      link: function (scope, el, attrs) {
      }
    };
  });