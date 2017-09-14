function leapYear(y) {
  if (Number.isInteger(y/4)){
    if (!Number.isInteger(y/100)){
      console.log("It's a leap year!")
    }else if (Number.isInteger(y/400)) {
      console.log("It's a leap year!")
    }else {
      console.log("Not a leap year...")
    }
  }else {
    console.log("Not a leap year...")
  }
  }
