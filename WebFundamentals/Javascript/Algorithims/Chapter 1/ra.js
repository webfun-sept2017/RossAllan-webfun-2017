function makeNeg(a) {
  tempArr=[];
  for (var i=0;i<a.length;i++){
    tempArr.push(-Math.abs(a[i]));
  }
  return tempArr;
}
