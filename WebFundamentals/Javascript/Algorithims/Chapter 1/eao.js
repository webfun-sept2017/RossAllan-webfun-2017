function evensAndOdds(a) {
  var eCount =0;
  var oCount =0;
  for (var i=0;i<a.length;i++){
    if (a[i]%2 == 0){
      eCount += 1;
      oCount = 0;
      if (eCount == 3){
        console.log("Even more so!");
      }
    }else{
      oCount += 1;
      eCount = 0;
      if (oCount == 3){
        console.log("That's odd!");
      }
    }
  }
}
