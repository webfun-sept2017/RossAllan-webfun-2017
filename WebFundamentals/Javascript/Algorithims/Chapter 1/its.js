function increSeconds(a) {
  var arr = a;
  for (var i=1;i<arr.length;i+=2){
    arr[i]+=i;
  }
  console.log(arr);
  return arr;
}
