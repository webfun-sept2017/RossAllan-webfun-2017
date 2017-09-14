function dojocount() {
  for (var i=1; i<=100; i++){
    console.log(i)
    if (Number.isInteger(i/5)){
      if (Number.isInteger(i/10)){
        console.log("Coding Dojo")
      }else {
        console.log("Coding")
      }
    }
  }
}
