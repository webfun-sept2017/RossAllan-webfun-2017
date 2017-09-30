function shorten(a,x) {
  for(var i=0;i<x;i++){
    a[i] = a[a.length-((x)-i)];
  }
  a.length=x;
  return a;
}
