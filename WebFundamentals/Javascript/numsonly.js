function numbersOnly(a) {
  var numOnly=[];
  for(var i=0;i<a.length;i++){
    if(typeof a[i] === "number"){
      numOnly.push(a[i]);
    }
  }
  return numOnly
}
