var app = angular.module('blessing', []);
app.controller('MainCtrl', function($scope, $timeout, $interval) {

var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      ua = "chrome"
    } else {
      ua = "safari"
    }
  }

if(ua != "safari"){
  myAudio = new Audio('https://s3.amazonaws.com/heaven/Chris_Zabriskie_-_03_-_Out_of_the_Skies_Under_the_Earth.mp3');
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
}




    /*
$scope.createH1('test div','first')*/

    //animations below

    $scope.start = 100;
    $scope.right = 0;


    /*$scope.blockCreate= function(text,class) {
var div = document.createElement('h1');
div.textContent = text;
div.setAttribute('class', class);
document.body.appendChild(div);

}*/

    $scope.blockCreate = function(text, providedClass) {
        var div = document.createElement('h1');
        div.textContent = text;
        div.setAttribute('class', providedClass);
        div.setAttribute('Id', providedClass);
        document.body.appendChild(div);
    }

    $scope.blockRemove = function(providedClass) {
        var node = document.getElementById(providedClass);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }

    }

function test(){console.log('Test worked')};

    $scope.first = function(increment,time) {
        var initialZoom = function() {
            $scope.start++;
            if ($scope.start > 1000) {
                $scope.start = 100
            } else {
                $('#cloudySky').css("min-width", $scope.start + "%")
                $('#cloudySky').css("min-height", $scope.start + "%")
            };
        }
        $('#cloudySky').velocity({opacity:1.0},4000)
        $interval(function() {
            initialZoom();
        }, increment, time)
    }



$scope.second = function(increment, time){
 var goRight =function(){
$scope.right -= .25;
if ($scope.right > 1000) {$scope.right = 100} else{
$('#cloudySky').css("left", $scope.right + "% " )
};
}
$interval(function () {
        goRight($scope.right) ;
    }, increment,time);
}

$scope.third =  function(increment,time){
$scope.blockCreate('Plant a seed','first');
var opa = 0;
if(ua == "safari"){
    $('.first').css("left", "38%" )
}
var opacity = function(){
  opa += .01
$('.first').css("opacity", opa )
}
$interval(function () {
        opacity() ;
    }, increment,time);
}
$scope.fourth = function(increment,time){
var opa =0;
var left= 0;
$scope.blockRemove('first');
$scope.blockCreate('Watch it grow and ','first');
if(ua == "safari"){
    $('.first').css("left", "38%" )
}
$('#first').css('left','-=200%')
var opacity= function(){
 opa += .01;
 left +=.01;
$('.first').css("opacity", opa )
$('.first').css("left", "+=" + left + "%" )
}
$interval(function () {
        opacity() ;
    }, increment,time);

}
$scope.fifth = function(increment,time){
var opa =0;
var left= 0;

$('.first').text('harvest the rewards')
$('#first').css('left','+=0%')
var opacity= function(){
 opa += .1;
$('.first').css("opacity", "-=" + opa + "%" )
}
var lefty= function(){
 left +=.1;
$('.first').css("left", "+=" + left + "%" )
}
$timeout(function(){
$interval(function () {
        lefty() ;
    }, increment,time);
},1500)

$timeout(function(){
$interval(function () {
        opacity() ;
    }, increment,time);
},3500)

}
$scope.sixth = function(increment,time){
var secondZoom = function (){
 $scope.start = $scope.start - .1;
$('#cloudySky').css("min-width", $scope.start + "%")
$('#cloudySky').css("min-height", $scope.start + "%")
}
  $interval(function() {
            secondZoom();
        }, increment, time)
} 
$scope.seventh = function(){
   $scope.blockRemove ('first')
$('#cloudySky').velocity({opacity:0.3},4000)
}
$scope.eigth = function(increment,time){
var opa = 0;
var left=10;
$scope.blockCreate('Life appears to be hard ','third');
if(ua == "safari"){
    $('.third').css("left", "-10%" )
}
var opacity= function(){
 opa += .1;
 left +=.001;
$('.third').css("opacity", opa )
$('.third').css("left", "+=" + left + "%" )
}
$interval(function () {
        opacity() ;
    }, increment,time);
}

$scope.ninth = function(increment,time){
var opa = 0;
var left=10;
$scope.blockCreate("but it doesn't have to be ",'second');
if(ua == "safari"){
    $('.second').css("left", "80%" )
}
var opacity= function(){
 opa += .1;
 left -=.001;
$('.second').css("opacity", opa )
$('.second').css("left", "-=" + left + "%" )
}
$interval(function () {
        opacity() ;
    }, increment,time);
}
$scope.tenth = function(increment,time){
var opa =1,
second = 200,
third = 300,
secondFunc= function(){
 second ++;   
$('.second').css("font-size", second + "%")
},
thirdFunc= function(){
 third --;   
$('.third').css("font-size", third + "%")
};
$interval(function () {
        secondFunc() ;
         thirdFunc() ;
    }, increment,time);
}
$scope.eleventh = function(increment,time){
var opa =1;
var opaChange = function(){
opa = opa - .01 ;
$('.third').css("opacity", opa);
$('.second').css("opacity", opa);
}
$interval(function () {
        opaChange() ;
    }, increment,time);
}
$scope.twelfth = function(increment,time){
     $scope.blockRemove('second')
      $scope.blockRemove('third')
$('#cloudySky').velocity({opacity:0.0},4000)
}
$scope.thirteenth = function(increment,time){
$scope.blockCreate('Receive a blessing today','first');
if(ua == "safari"){
    $('.first').css("left", "20%" )
}
var opa = 0;
var opaChange = function(){
opa = opa + .01 ;
$('.first').css("opacity", opa);
}
$interval(function () {
        opaChange() ;
    }, increment,time);
}


$scope.first(25,150)
$timeout(function(){
    $scope.second(25,350);
},4000);

$timeout(function(){
$scope.third(100,100);
},4600);
$timeout(function(){
$scope.fourth(10,200);
},14600);
$timeout(function(){
$scope.fifth(25,100);
},17200);
$timeout(function(){
$scope.sixth(20,250);
},21200)
$timeout(function(){
$scope.seventh();
},23200)
$timeout(function(){
$scope.eigth(60,50);
},24800)
$timeout(function(){
$scope.ninth(60,50);
},26800)
$timeout(function(){
$scope.tenth(20,200);
},28800)
$timeout(function(){
$scope.eleventh(20,200);
},30800)
$timeout(function(){
$scope.twelfth() ;
},32800);
$timeout(function(){
$scope.thirteenth(40,200);
},35800);













});