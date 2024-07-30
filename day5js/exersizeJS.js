//1-------------------------------------------------------------------
var is_array = function (input) {
  if (typeof ["", ""] === typeof input) return true;
  return false;
};

//   console.log(is_array('w3resource'));

//   console.log(is_array([1, 2, 4, 0]));
//2------------------------------------------------------------------
function clone(arr) {
  const result = arr.slice();
  return result;
}
//console.log(clone([1,2,4,5]));
//3------------------------------------------------------------------
function returnNthElemnt(arr, element) {
  let result = [];
  for (let index = 0; index < element; index++) result.push(arr[index]);

  return result;
}
//console.log(returnNthElemnt([7,34,43,2,56,6,4],4));
//4------------------------------------------------------------------
function getLastNthElemnt(arr, element) {
  let result = [];
  for (let index = element - 1; index < arr.length; index++)
    result.push(arr[index]);

  return result;
}
//console.log(getLastNthElemnt([7, 34, 43, 2, 56, 6, 4], 4));
//5-----------------------------------------------------------------
function joinAllElement(arr) {
  return arr.join(",");
}
//console.log(joinAllElement(["Red", "Green", "White", "Black"]));
//6-----------------------------------------------------------------
function add_ToEvenNumber(number) {
  let result = "";
  while (number > 0) {
    let digit = number % 10;
    if (digit % 2 == 0) result += digit + "-";
    number = Math.floor(number / 10);
  }
  return result.slice(0, -1);
}
//console.log(add_ToEvenNumber(23456));
//7-----------------------------------------------------------------
function sortArry(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
//console.log(sortArry([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
//8------------------------------------------------------------
function mostFreq(arr) {
 
  let count = 0;
  let mostFreq = 0;
  ss = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]==arr[j]) count++;
    }
    if(count > mostFreq) mostFreq=count;
    count=0;
  }
  return mostFreq;
}
console.log(mostFreq([-3, 2, 7, 6, 5, -4, 3, 2, 2]));
