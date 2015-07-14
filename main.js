function  sum(x,y){
  var result = x+y;
  return result;
}
var sumof = sum(2,2);
console.log(sumof);

function isEqual(x,y){
  if (x===y){
    console.log(true);
  }else{
  console.log(false);}
}
isEqual(8,8);

function discountPercentage(x,y){
  if (y<0||y>100){
    console.log("that is not a valid discount");
  }
  var result = x*(y* '.01');
  console.log(result);
}
discountPercentage(500,50);

// TODO: finish #4
// function stringCapitalize(str){
//   var words = str.split(" ");
//   for (i=0;i< str.split(" ").length;i++){
//     words = words.toUpperCase();
//   }
// }
// stringCapitalize("hello! world this is a test");

function evenNumbers(){
var randomNum = Math.random()*101;
for (var i = 0; i < randomNum; i++) {
  if (i%2===0) {
    console.log(i);
    }
  }
}
evenNumbers();
