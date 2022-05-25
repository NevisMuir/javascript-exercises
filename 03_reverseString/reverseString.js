const reverseString = function(string) {
    let length=string.length-1
    let newString="";
    for(let i=length;i>=0;i--){
        let letter = string.charAt(i)
        newString += letter
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
