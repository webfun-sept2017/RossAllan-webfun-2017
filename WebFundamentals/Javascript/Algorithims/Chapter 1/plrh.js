function pLrH(a) {
  var low;
  var high;
  for (i=0;i<a.length;i++){
    if (a[i]>high){
      high = a[i];
    }
    if (a[i]<low){
      low = a[i];
    }
  }
  console.log(low);
  return high;
}
