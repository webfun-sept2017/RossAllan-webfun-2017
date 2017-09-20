function slotMachine(q) {
  while (q > 0){
    q--
    if (Math.floor(Math.random()*100)== 99){
      q = q + Math.floor(Math.random()*51) + 49;
      console.log("You won! You have "+q+" quarters.");
    }
  }
  console.log("You have no more quarters to play.")
}
