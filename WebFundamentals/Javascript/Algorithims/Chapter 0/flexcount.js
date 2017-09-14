function flexCount(lowNum, highNum, mult) {
  while (!Number.isInteger(highNum/mult)){
    highNum--
  }
  for(highNum; highNum>=lowNum; highNum=highNum-mult){
    console.log(highNum)
  }
}
