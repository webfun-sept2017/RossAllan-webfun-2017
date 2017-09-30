function swap(a) {
  var tempArr=a;
  if (a.length%2=0){
    var length=a.length/2;
  }else{
    var length=((a.length-1)/2);
  }
  for (var i=0;i<length;i+=2){
    tempArr[i]=a[a.length-i];
    tempArr[a.length-i]=a[i];
  }
  return tempArr;
}
