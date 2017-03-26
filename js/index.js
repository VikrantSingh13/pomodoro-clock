var mins = parseInt(document.getElementById('session-time').value),
    secs = 0,
    onBreak = false,
    onPause = true,
    t;

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
  if(onPause){
    onPause = false;
    timer();
  } else {
    onPause = true;
    clearTimeout(t);
  }
  
}