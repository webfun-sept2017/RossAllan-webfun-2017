function whatHappensToday() {
  var odds=Math.floor(Math.random()*100);
  if (odds<10){
    console.log("Volcano");
  }
  if (odds>=10 && odds<25){
    console.log("Tsunami");
  }
  if (odds>=25 && odds<45){
    console.log("Earthquake");
  }
  if (odds>=45 && odds<70){
    console.log("Blizzard");
  }
  if (odds>70){
    console.log("Meteor");
  }
}
