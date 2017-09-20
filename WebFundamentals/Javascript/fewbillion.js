var penny = 0.01
var sum = 0
for (var i = 30; i > 0; i--) {
  sum = sum+penny;
  penny=(penny*2);
}
console.log(sum)
