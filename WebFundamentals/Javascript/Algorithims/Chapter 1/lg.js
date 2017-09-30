function letterGrade(g) {
  if (g>=90){
    var letter="A"
  }else if (g>=80 && g<90){
    var letter="B"
  }else if (g>=70 && g<80){
    var letter="C"
  }else if (g>=60 && g<70){
    var letter="D"
  }else if (g<60){
    var letter="f"
  }
  console.log("Score: "+g+" Grade: "+letter);
}
