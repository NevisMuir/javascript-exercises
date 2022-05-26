const ftoc = function(f) {
  let c=(f-32)*(5/9)
 let result=Math.round(c*10)/10
  return result
};

const ctof = function(c) {
let f=c*(9/5)+32
let result=Math.round(f*10)/10
return result
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
