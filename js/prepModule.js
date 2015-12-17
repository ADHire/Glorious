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
    size: "Massive",
    location: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    jobDesc: "Awesome",
    salary: "$1,000,000",
    wants: "You",
    bonusSkills: "PHP",
    industry: "Tech",
    product: "Awesome Code",
    photo_url: "../img/icons/google-icon-small.png"
  };
  var instagram = {
    name: "Instagram",
    status: "Hiring",
    size: "Huge",
    location: "1 Hacker Way, Menlo Park, CA 94025",
    jobDesc: "Manage and develop a small team of designers. This requires setting clear goals, managing project loads and allocating designers accordingly, ensuring deadlines are met and setting up team members for overall success. Guide the team to develop best practices for ensuring a high bar of quality. Collaborate cross-functionally with product management, engineering, user research and communication design to ensure a smooth product development process. Recruit new designers and actively participate in the hiring process. Roll up your sleeves and contribute as a designer for at least one project. Execute in a fast-paced and highly fluid environment.",
    salary: "$1,000,000",
    wants: "Minimum 2 years industry experience in a management or leadership role on a Design team. Minimum 5 years of design experience. Included design portfolio with examples of interactions and visuals across web applications (not just static websites). Experience in product strategy. Organizational and analytical experience",
    bonusSkills: "Photoshop",
    industry: "Tech",
    product: "online mobile photo-sharing, video-sharing and social networking service that enables its users to take pictures and videos, and share them on a variety of social networking platforms, such as Facebook, Twitter, Tumblr and Flickr.",
    photo_url: "../img/icons/instagram-icon-small.png"
  };
  var nutshell = {
    name: "Nutshell",
    status: "No Positions Open",
    size: "Small",
    location: "212 South Fifth Ave., Ann Arbor, MI 48104",
    jobDesc: "Working with our web and mobile teams to build (JSON API-compatible) REST endpoints that power new interfaces. You’ll connect Nutshell with new integrations and work with the data we store in MySQL and Solr. And with our Vagrant and Jenkins stack, you'll probably deploy tested code to production on your first day.",
    salary: "$1,000,000",
    wants: "PHP development experience. Working knowledge of modern PHP frameworks, including Symfony2. Strong background in SQL and relational databases. Background in API design. Experience with unit testing, continuous integration. Passion about fit and finish of user interfaces.",
    bonusSkills: "C",
    industry: "Tech",
    product: "Customer relationship management platform.",
    photo_url: "../img/icons/nutshell-icon-small.png"
  };
  var apple = {
    name: "Apple",
    status: "Accepting Resumes",
    size: "Huge",
    location: "1 Infinite Loop, Cupertino, CA 95014",
    jobDesc: "Imagine what you could do here. At Apple, great ideas have a way of becoming great products, services, and customer experiences very quickly. Bring passion and dedication to your job and there's no telling what you could accomplish.",
    salary: "$1,000,000",
    wants: "Strong object-oriented programming skills. Experience with relational databases and SQL. Knowledge of Ruby on Rails and JavaScript. Scripting skills in Perl, Ruby, UNIX shells. Strong analytical and problem solving skills. Excellent written and verbal communication skills",
    bonusSkills: "Bachelor’s Degree (in Computer Science or equivalent experience)",
    industry: "Tech",
    product: "Nearly everything",
    photo_url: "../img/icons/apple-icon-small.png"
  };
  var grandCircus = {
    name: "Grand Circus",
    status: "Waiting on interview",
    size: "Small",
    location: "1570 Woodward Ave., Detroit, MI 48226",
    jobDesc: "Becoming the most amazing instructor this camp has ever seen.",
    salary: "$1,000,000",
    wants: "Godly coders",
    bonusSkills: "Being able to crush your work",
    industry: "Tech",
    product: "Grand Circus is passionate about training people for amazing careers in tech and helping local businesses grow by hiring local tech superstars. Our bootcamps serve both purposes: we give people critical skills for tech jobs while introducing them to businesses looking for talent.",
    photo_url: "../img/icons/grandCircus-icon-small.png"
  };

  var companies = [grandCircus, google, apple, instagram, nutshell];
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

  // $("#navbar_icon").css("visibility","hidden"); // This uncommented means the hamburger shows up.
  $scope.pictures = [];
  $http({
    method: 'GET',
    url: 'https://api.unsplash.com/photos/?client_id=67726f5ad542c14d61f2e484786f72da4cf6bf5f772a6a058719c14f14459649',
  }).then(function successCallback(response) {
    response.data.forEach(function(element){
      $scope.pictures.push(element.urls.regular);

    });

    // console.log($scope.pictures);
  }, function errorCallback(response) {
    console.log("Shit is broke");    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  var myVar = setInterval(myTimer, 10000);
  var current = 0;
  function myTimer() {
    var tag = $scope.pictures[current];
    var container = document.getElementById("foo");
    container.src=tag;

    //If we're at our max (minus 1 because of 0 based index) then reset
    if (current == $scope.pictures.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }

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
