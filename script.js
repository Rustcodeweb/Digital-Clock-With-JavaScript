function clock(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  document.getElementById("clockbox").innerHTML = h + ' : ' + m + 'm: ' + s + 's';
  setTimeout(clock,1000);
}

function addZero(x){
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}
