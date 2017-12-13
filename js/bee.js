 var ff=document.getElementById('f'),
globall=document.getElementById('global').value, 
personal=document.getElementById('person').value,
inert=document.getElementById('inerc').value,
 n=document.getElementById('rozm_d').value,
 k=document.getElementById('roz_roy_s').value,
 pp=document.getElementById('pros_posh');







var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = 'red';
var x,y;
var timer;
function drawrect(x,y){
ctx.fillRect(x, y, 10, 15);
}
  
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < n; i++){
      // drawrect(swarm[i]);
      drawrect(swarm[i], velocity[i]);
      
    } 
    
}
function run(){
 timer= setInterval( go ,500);
}
function stop(){
clearInterval(timer);
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//---------------------------------------------------------

 // var globall=0.1, personal= 0.3, inert=0.1, delay=100;
 // var n=60, k=100;
 var xmin=-10, xmax=6, ymin=10, ymax=16;
 var velocity=[[]], swarm=[[]], bestpers=[], bestglob=[[]];
 var  m = 2;


function Lrand(min,max){
  return (min+((Math.random())/1*Math.exp(1))*(max-min));
}


function init(){
  for (var i = 0; i < n; i++){
    swarm[i]=[i];
    velocity[i] = [i];
    bestpers[i] = [i];

    for (var j = 0; j < 1; j++){
      velocity[i][j] = Lrand(-1, 1);
      swarm[i][j]=Lrand(xmin, xmax);
      bestpers[i][1] = 1000;
    }
  }
  bestglob[1] = 1000;

}

  init();

function MoveWasp(){
   for (var i = 0; i < n; i++){
     for (var a = 0; a < 1; a++){
        velocity[i][a] = (inert*velocity[i][a])+Lrand(-1, 1) * globall * (bestglob[1] -
         swarm[i][a]) + Lrand(-1, 1) * (personal * (bestpers[i][a] - swarm[i][a]));

          swarm[i][a] = swarm[i][a] + velocity[i][a];

      }     
    }

}

function calculate(i){
  var f;
  var a = swarm[i][0], b = swarm[i][1];

  var sfera2 = document.getElementById('sfera2');
  var elip2 = document.getElementById('elip2');
  var shef2 = document.getElementById('shef2');
  var rozen2 = document.getElementById('rozen2');
  var rastr2 = document.getElementById('rastr2');
  if (sfera2.selected){
    f=sfera(a);
  }
 if (elip2.selected){
    f=elip(a);
  }  
   if (shef2.selected){
    f=shaf(a);
  }  
   if (rozen2.selected){
    f=rozen(a);
  }  
   if (rastr2.selected){
    f=rastr(a);
  }  
  // f = - 0.1 * Math.abs(1 - b) -  Math.abs(1 - a) - (20 * a + b );
  return f;
}

function chkBrd(i){ //Verifies agent's position
 if((xmin <= swarm[i][0]) && (swarm[i][0] <= xmax) && (ymin <= swarm[i][1]) && (swarm[i][1] <= ymax))
  return 1;
 else
  return 0;
}
function checkBP(i,a){
  if(a < bestpers[i][2]){
    bestpers[i][2] = a;
    bestpers[i][1] = swarm[i][1];
    bestpers[i][0] = swarm[i][0];
 } 
}
function checkBG(i, a){
 if(a < bestglob[2])
 {
  bestglob[2] = a;
  bestglob[1] = swarm[i][1];
  bestglob[0] = swarm[i][0];
 }
}

function go(){
  var a;
  for(var q = 0; q < k; q++){
      for(var i = 0; i < n; i++){
        if(chkBrd(i)){
          a = calculate(i);
          checkBP(i, a);
          checkBG(i, a);
        }
      }
      draw();
      MoveWasp();
      }
  return;
}


function sfera(a){
  var d0=-20,dn=20,x;
  var sf=[];
  for (var i = d0; i <=dn; i++) {
    sf[i]=Math.pow(a,2);
     var sum=+sf[i];
  }
   console.log(sum);
}

// setInterval( go ,500)
function elip(a){

  var d0=-20,dn=20,x;
  var sf=[];
  for (var i = d0; i <=dn; i++) {
    sf[i]=Math.pow((Math.pow(10 ,6),((i-1)/(d-1))))*Math.pow(a,2);
    var sum=+sf[i]
  }
}
function shaf(a){

  var d0=-20,dn=20,x;
  var sf=[];
  for (var i = -10; i <=10; i++) {
    for (var j = -10; j <= 10; j++) {
       sf[j]=a;
      var s=+sf[j];
    }
     sf[i]=Math.pow(s);
    var sum=+sf[i];
   
  }
}
function rozen(a){
  var d0=-20,dn=20,x;
  var sf=[];
  for (var i = -10; i <=10-1; i++) {
    sf[i]=(100*Math.pow((a-Math.pow(a,2)),2)+Math.pow((1-a),2));
    var sum=+sf[i]
  }
}
function rastr(a){
  var d0=-20,dn=20,x;
  var sf=[];
  for (var i = -5; i <=5; i++) {
    sf[i]=(Math.pow(a,2)-10*Math.cos(2*Math.PI*a)+10)
    var sum=+sf[i]
  }
}



// function test(a){
// var v= document.getElementById('sel2').value;

// switch(v) {
//   case 1: 
//     f=sfera(a);
//   break;

//   case 2:  
//     f=elip(a);
//   break;

//   case 3:  
//     f=shaf(a);
//     console.log(f);
//   break;

//   case 4:  
//     f=rozen(a);
//   break;

//   case 5:  
//     f=rastr(a);
//   break;

//   default:
  
//   break;
// } 
// }