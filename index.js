// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function  returnFirstTwoDrivers(drivers){
return drivers.slice(0,2)
}
/*const firstTwo=returnFirstTwoDrivers(drivers);
console.log(firstTwo)*/
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4)
    
}
/*const lastTwo=returnLastTwoDrivers(drivers);
console.log(lastTwo)*/
 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
 //const select=selectingDrivers;
 

//console.log(select[0](drivers));  Output: ['Antonia', 'Nuru']
function   createFareMultiplier(int){
    return function fareMultiplier(fare){
         return fare*int;
    }
    
}
//console.log(createFareMultiplier(10,12))

function    fareDoubler(fare){
   
    //return fare*2
    const faredouble=createFareMultiplier(2)
    return faredouble(fare)
}

//console.log(fareDoubler(3))
function  fareTripler(fare){
    const faretribler=createFareMultiplier(3);
    return faretribler(fare)

}
//console.log(fareTripler(5))
const selectDifferentDrivers=(arrayOfDrivers,functionk)=> {
    return functionk(arrayOfDrivers);

}

//console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))