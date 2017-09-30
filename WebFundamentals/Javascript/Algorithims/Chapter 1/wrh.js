function whatReallyHappensToday() {
  var oddsv=Math.floor(Math.random()*100);
  var oddst=Math.floor(Math.random()*100);
  var oddse=Math.floor(Math.random()*100);
  var oddsb=Math.floor(Math.random()*100);
  var oddsm=Math.floor(Math.random()*100);
  if (oddsv>=90){
    console.log("Volcano");
  }
  if (oddst>=85){
    console.log("Tsunami");
  }
  if (oddsv>=80){
    console.log("Earthquake");
  }
  if (oddsv>=75){
    console.log("Blizzard");
  }
  if (oddsv>=70){
    console.log("Meteor");
  }
}
