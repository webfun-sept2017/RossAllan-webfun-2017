function hungry(a) {
  var food = false;
  for (var i=0;i<a.length;i++){
    if (a[i]=="food"){
      console.log("yummy");
      food=true;
    }
  }
  if (food==false){
    console.log("I'm hungry");
  }
}
