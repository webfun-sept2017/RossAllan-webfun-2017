function prevLengths(a) {
  tempArr = [];
  lengCount = 0;
  for (var i=0;i<a.length;i++){
    tempArr.push(lengCount);
    lengCount=a[i].length;
  }
  return tempArr;
}
