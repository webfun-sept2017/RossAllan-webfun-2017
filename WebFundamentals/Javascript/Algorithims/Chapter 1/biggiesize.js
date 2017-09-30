function biggieSize(a) {
  for (var i=0;i<a.length;i++){
    if (a[i]>0){
      a[i]="big";
    }
  }
  return a;
}
