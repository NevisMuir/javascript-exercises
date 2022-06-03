const findTheOldest = function(array) {
    const oldest=array.sort(function(a,b){
        function age (x){
            if (isNaN(x.yearOfDeath)){return new Date().getFullYear() - x.yearOfBirth}
            else{return x.yearOfDeath-x.yearOfBirth}
        }
        
        return age(a) > age(b) ? -1: 1;
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
