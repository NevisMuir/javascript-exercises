const removeFromArray = function(array,...numbers) {
      //loop starting at initial numbers position and looping until end
  for(let i=0;i<numbers.length;i++){
    //function to check each element in array, return when true
    function findNumber(x){
      return x===numbers[i]
    }
    //finds actual index in array when findNumber is true
    let index=array.findIndex(findNumber)
    //remove value from array at index
    if(index>=0)array.splice(index,1);
  }return array
}
;

// Do not edit below this line
module.exports = removeFromArray;
