function reverse(a) {
  tempArr = [];
  for (var i=a.length;i>=0;i--){
    tempArr.push(a[i]);
  }
  return tempArr;
}
