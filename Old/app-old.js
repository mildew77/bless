var app = angular.module('blessing', []);
app.controller('MainCtrl', function($scope,$timeout,$interval) {

  //play song in a loop


/**//*  $scope.play = function() {
    player = document.getElementById('audio');
    song = document.getElementById('playSong');
    player.load();
    player.play();
    
  }*/

myAudio = new Audio('https://s3.amazonaws.com/heaven/Chris_Zabriskie_-_03_-_Out_of_the_Skies_Under_the_Earth.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();






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

$scope.blockCreate = function(text,providedClass){
var div = document.createElement('h1');
div.textContent = text;
div.setAttribute('class', providedClass);
div.setAttribute('Id', providedClass);
document.body.appendChild(div);
}

$scope.blockRemove = function(providedClass){
var node = document.getElementById(providedClass);
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

}



$scope.initialZoom = function(start){
  $scope.start ++;
if (start > 1000) {$scope.start = 100} else{
$('#cloudySky').css("min-width",$scope.start + "%")
$('#cloudySky').css("min-height",$scope.start + "%")
};
}

$scope.goRight =function(start){
$scope.right -= .25;
if (start > 1000) {$scope.right = 100} else{
  
$('#cloudySky').css("left", $scope.right + "% " )
};
}


$scope.zoom = $interval(function () {
       $scope.initialZoom($scope.start) ;
  

    }, 25,100);




$scope.zoom.then(function(res){
  $scope.start = 100;
  $scope.nextMove();

})

$scope.nextMove = function(){
$interval(function () {
        $scope.goRight($scope.right) ;
    }, 50,200);

  }

  $('#cloudySky').velocity({opacity:1.0},{
    duration:3000,
    complete:function(){

     
    $scope.blockCreate('Plant a seed','first');
    $('.first').velocity({opacity:1.0},2000)
      
    }

  }
)

  $timeout(function(){
    $('#cloudySky').velocity({ opacity: 0.3 },{
      duration:10000,
      complete: function(){
       $('#first').velocity({left: "-=50%", opacity:0},{
        duration:2000,
        complete:function(){
          $scope.blockRemove('first');
          $scope.blockCreate('Watch it grow and ','first')
          $('#first').css('left','-=200%')
        
$('#first').velocity({left:"+=25%", opacity:1.0},{
  duration:3000,
  complete:function(){
    $('#first').text('reap the rewards');
   $('#first').velocity({left:"+=25%",opacity:0},{duration:4000,complete:function(){

      $scope.zoom.then(function(res){
  $scope.start = 100;
  $scope.nextMove();

   $('#cloudySky').velocity({ opacity: 0.2 },10000)
     $scope.blockRemove('first');
    $scope.blockCreate('You will find that when you help others ','first')
     
    
    $('#first').velocity({ opacity: 1.0 },1000)
    $timeout(function(){
       $scope.blockCreate('You actually help yourself','second')
    
      
         $('#second').velocity({ opacity: 1.0 },{

          duration:1000,
          complete:function(){
            
            $('#first').velocity({ opacity: 0, marginLeft:300 },{

              duration:5000,
              complete:function(){
                 $scope.blockRemove('first');
                $('#second').velocity({ opacity: 0, marginLeft:-500 },{

                  duration:5000,
                  complete:function(){
                       $scope.blockRemove('second');

                         $scope.blockCreate('Please contribute today ','third')
                     $('#cloudySky').velocity({ opacity: 0},1000);

                      $timeout(function(){

                        $('#third').velocity({ opacity: 100},2000);
                      },1000)
                    
                   

                  }

                  })

              }
            })

          }
         })

    },1300)

})

    }})

  }

})
          
        }
      })
      }

    });

  },5000)


  


});