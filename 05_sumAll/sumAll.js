const sumAll = function(startNumber, endNumber) {
  let sum=0
  if(typeof startNumber !== "number" || typeof endNumber !== "number") return "ERROR"
  if(startNumber>endNumber){
    for(let i=endNumber;i<=startNumber;i++){
        sum +=i
      }
  }else{
    for(let i=startNumber;i<=endNumber;i++){
      sum +=i
    }
  }
    if(!(sum>=0)) return "ERROR";
  return sum
};

// Do not edit below this line
module.exports = sumAll;
