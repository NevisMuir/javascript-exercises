function palindromes (string) {
    //turn string into lowercase
    let lowercaseString = string.toLowerCase();
    //turn lowercase into array
    let rawArray = lowercaseString.split("")
    //filter spaces, exclamation marks, etc out of array
    let filteredArray = rawArray.filter((letter)=> letter >= 'a' && letter<= 'z')
    console.log(filteredArray)
    //reverse array => reverse alters the original array *eye roll* so we need to slice it first
    let reverseFilteredArray= filteredArray.slice().reverse()
    console.log(reverseFilteredArray)
    //loop through arrays, comparing values
    //if all equal, return true
    for(let i=0; i<=filteredArray.length;i++){
        if(filteredArray[i]!==reverseFilteredArray[i])return false
        if(filteredArray[i]==reverseFilteredArray[i]&&filteredArray.length==i)return true
    }
}
// Do not edit below this line
module.exports = palindromes;
