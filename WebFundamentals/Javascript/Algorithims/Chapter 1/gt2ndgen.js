function GreaterT2(a) {
  if (a.length<2){
    break;
  }
  var tempArr =[];
  for (var i=0;i<a.length;i++){
    if (a[i]>a[1]){
      tempArr.push(a[i]);
    }
  }
  return tempArr;
  console.log(tempArr.length);
}
