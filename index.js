// function scuberGreetingForFeet(feet){ 
  // if(feet<=400) {return "This one is on me!"}

  // else (feet>400) }
  // console.log (scuberGreetingForFeet(199))

function scuberGreetingForFeet(feet){
  if (feet<=400) {return "This one is on me!"} 
   else if (feet>2000 && feet <=2500) return('I will gladly take your thirty bucks.') 
    else if(feet>2500) return ("No can do.")
    
  } 
// console.log (scuberGreetingForFeet(2700))


// function ternaryCheckCity(city){
// //   const cityName= NYC
// //   cityName?("Ok, sounds good."):("No go.")
// // } 
// const city= 'NYC'
function ternaryCheckCity(city){
  // let cityResponse;
  // if (city= 'NYC') {return"Ok, sounds good."} 
  // else  (cityResponse="No go.")
// let place= 'NYC';
  if(city=== 'NYC')  {return'Ok, sounds good.';}
     else {return'No go.'};
}

//  console.log (ternaryCheckCity('Nevada'))



function switchOnCharmFromTip(tip){
  if (tip==='generous') {
    return "Thank you so much.";
    
  } else if (tip==='not as generous') {
    return "Thank you."; }  
  else { 
  return    "Bye." }
  
}console.log(switchOnCharmFromTip('anythingElse'))








  // const generousTip= 200
  // let isGenerous , isNotAsGenerous, anythingElse
//  switch(tip){
//   {
//     case 'generousTip'
//         console.log("Thank you so much.")
//     case 'isNotAsGenerous'
//         console.log("Thank you.")
//     case 'anythingElse'
        // console.log( "Bye.")
  // }
//  }
 
console.log(switchOnCharmFromTip('generousTip'))