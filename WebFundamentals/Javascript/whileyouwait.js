var daysUntil = 60;
while (daysUntil >= 0){
  if (daysUntil >= 30){
    console.log(daysUntil+" days until my birthday. Why can't it just come already?");
  }else if (daysUntil >=5){
    console.log(daysUntil+" days until my birthday! I'm so ready for it!");
  }else if (daysUntil > 0){
    console.log(daysUntil+ " DAYS UNTIL MY BIRTHDAY!!");
  }else{
    console.log("It's my birthday!!!! WHOOOO PARTAY!");
  }
  daysUntil = daysUntil - 1;
}
