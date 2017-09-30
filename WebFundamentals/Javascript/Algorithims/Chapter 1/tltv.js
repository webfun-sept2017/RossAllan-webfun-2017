function redundantArray(l,v) {
  var tempArr = [];
  for (var i=0;i<l;i++){
    tempArr.push(v);
  }
  if (l == v){
    console.log("Jinx!");
  }
}
