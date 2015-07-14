// function  sum(x,y){
//   var result = x+y;
//   return result;
// }
// var sumof = sum(2,2);
// console.log(sumof);
//
// function isEqual(x,y){
//   if (x===y){
//     console.log(true);
//   }else{
//   console.log(false);}
// }
// isEqual(8,8);
//
// function discountPercentage(x,y){
//   if (y<0||y>100){
//     console.log("that is not a valid discount");
//   }
//   var result = x*(y* '.01');
//   console.log(result);
// }
// discountPercentage(500,50);
//
// TODO: finish this function
// function stringCapitalize(str){
//   var words = str.split(" ");
//   for (i=0;i< words.length;i++){
//     caps = words[i].charAt(0).toUpperCase;
//     console.log(words[i].toUpperCase());
//   }
// }
// stringCapitalize("hello! world this is a test").toString();
//
// function evenNumbers(){
// var randomNum = Math.random()*101;
// for (var i = 0; i < randomNum; i++) {
//   if (i%2===0) {
//     console.log(i);
//     }
//   }
// }
// evenNumbers();
//
// function isDivisible(i,n){
//   if(i%n===0){
//     console.log(true);
//     return true;
//   }else{
//     console.log(false);
//     return false;
//   }
// }
// isDivisible(8,3);
//
// function oddNumbers(){
//   var randomNum = Math.random()*101;
// if (randomNum<= 40){
//   for (var i = 0; i < 40; i++ ){
//       if (i % 2 !== 0){
//         console.log(i);
//       }
//     }
//   } else {
//     for (var n = 40; n<= randomNum;n++){
//       if (n % 2 !== 0){
//         console.log(n);
//       }
//     }
//   }
// }
// oddNumbers();

var num = [3,4,20,5,6,10];
function calculator(){
  var max = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] > max){
      max = num[i];
    }
  }
      console.log("the max is " + max);
  var avg = 0;
  var sum = 0;
  for (var n = 0; n < num.length; n++) {
    sum += num[n];
  }
  avg = sum / num.length;
  console.log("the average is " + avg);
}
calculator();
