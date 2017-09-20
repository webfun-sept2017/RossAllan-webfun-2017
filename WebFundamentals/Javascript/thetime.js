var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
function thetime() {
  var time = "It's"
  if (MINUTE < 5){
    time = time + " 5 after ";
  }else if (MINUTE >= 5, MINUTE < 15) {
    time = time + " just after ";
  }else if (MINUTE >= 15, MINUTE < 30) {
    time = time + " quater after ";
  }else if (MINUTE >= 30, MINUTE < 45){
    time = time + " half past ";
  }else if (MINUTE >= 45){
    time = time + " almost ";
  }
  if (MINUTE >= 45){
    time = time+(HOUR+1);
  }else {
    time = time+HOUR;
  }
  if (PERIOD == "AM"){
    time = time+" in the morning";
  }else {
    time = time+" in the evening"
  }
  console.log(time)
}
thetime()
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
thetime()
