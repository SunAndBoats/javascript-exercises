/*
const leapYears = function(givenYear) {


    // un año es bisiesto si es divisible por 4 y en caso de que sea divisible por 100 tambien debe ser divisible por 400
    if(givenYear%4===0 && !givenYear%100) {return true}/*
        else if(givenYear%100===0&&givenYear%400===0)){return true}
        else{ return false}
};

// Do not edit below this line
module.exports = leapYears;
*/
const leapYears = function(givenYear) {
    if(givenYear%4===0 && givenYear%100!==0) return true
    else if(givenYear%100===0&&givenYear%400===0) return true
    else return false
};

// Do not edit below this line
module.exports = leapYears;
