var mins = parseInt(document.getElementById('session-time').value),
    secs = 0,
    onBreak = false,
    onPause = true,
    timeChanged = false,
    t;

//add onBreak functionality in this function once session is over
function minus(){
  if(secs == 0){
    secs = 59;
    mins--
  } else {
    secs--
  }
  
  document.getElementById("timer").textContent = (mins ? (mins <= 9 ? '0' + mins : mins) : '00') + ' : ' + (secs ? (secs <= 9 ? '0' + secs : secs) : '00');
  
  timer();
}

function timer(){
  t = setTimeout(minus, 1000);
}

function startTimer(){
  if(timeChanged){
    mins = parseInt(document.getElementById('session-time').value),
    secs = 0,
    onBreak = false,
    onPause = true,
    timeChanged = false;
    
    startTimer();
    
  }
  else if(onPause){
    onPause = false;
    timer();
  } else {
    onPause = true;
    clearTimeout(t);
  }  
}

function timerDec(str){
  clearTimeout(t);
  var tempTimer = document.getElementById(str + "-time").value;
  document.getElementById(str + "-time").value = parseInt(tempTimer) - 1;
  
  timeChanged = true;
}

function timerInc(str){
  clearTimeout(t);
  var tempTimer = document.getElementById(str + "-time").value;
  document.getElementById(str + "-time").value = parseInt(tempTimer) + 1;
  
  timeChanged = true;
}