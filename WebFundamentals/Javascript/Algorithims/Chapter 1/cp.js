function countPos(a) {
  var count=0;
  for (var i=0;i<a.length;i++){
    if (a[i]>0){
      count++
    }
  }
  var tempArr = a;
  tempArr[(tempArr.length)-1] = count;
  return tempArr;
}
