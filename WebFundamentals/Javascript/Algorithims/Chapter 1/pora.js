function whyWouldIDoThis(a) {
  console.log(a[(a.length-1)]);
  for (var i=0;i<a.length;i++){
    if ((a[i]%2)==1){
      return a[i];
      break;
    }
  }
}
