var mins = parseInt(document.getElementById('session-time').innerText),
    secs = 0,
    onBreak = false,
    onPause = true,
    timeChanged = false,
    t;

//todo
//add sound files when going on break and ending break
function minus(){
  if(secs == 0 && mins == 0){
    
    if(!onBreak){
      mins = parseInt(document.getElementById('break-time').innerText),
        onBreak = true,
        onPause = true;
      
      document.getElementById('on-break').classList.add('visible');
      
      clearTimeout(t);
      startTimer();
      
    } else {
      
      mins = parseInt(document.getElementById('session-time').innerText),
        onBreak = false,
        onPause = true;
      
      document.getElementById('on-break').classList.remove('visible');
      
      clearTimeout(t);
      startTimer();      
    }
    //sound file will go here
  }
  else if(secs == 0){
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
    mins = parseInt(document.getElementById('session-time').innerText),
    secs = 0,
    onBreak = false,
    onPause = true,
    timeChanged = false;
    
    startTimer();
    
  }
  else if(onPause){
    onPause = false;
    
    document.getElementById('paused').classList.remove('visible');
    
    timer();
  } else {
    onPause = true;
    document.getElementById('paused').classList.add('visible');
    clearTimeout(t);
  }  
}

function timerDec(str){
  
  document.getElementById('paused').classList.add('visible');
  
  clearTimeout(t);
  
  var tempTimer = document.getElementById(str + "-time").innerText;
  document.getElementById(str + "-time").innerText = parseInt(tempTimer) - 1;
  
  timeChanged = true;
}

function timerInc(str){
  
  document.getElementById('paused').classList.add('visible');
  
  clearTimeout(t);
  
  var tempTimer = document.getElementById(str + "-time").innerText;
  document.getElementById(str + "-time").innerText = parseInt(tempTimer) + 1;
  
  timeChanged = true;
}