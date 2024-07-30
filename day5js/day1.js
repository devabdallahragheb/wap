function max(a, b) {
  if (a > b) return a;
  return b;
}
console.log(max(5, 6));
function maxOfThree(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > a) return b;
  if (c > a && c > a) return c;
}

console.log(maxOfThree(7, 4, 9));

function isVowel(c) {
  let vawelArr = ["a", "e", "o", "u", "i"];
  if (vawelArr.includes(c)) return true;
  return false;
}
console.log(isVowel("i"));
function findVowels(a) {
  let arr = [];
  let vawelArr = ["a", "e", "o", "u", "i"];
  for (let index = 0; index < a.length; index++) {
    if (vawelArr.includes(a[index])) arr.push(a[index]);
  }
  return arr;
}
console.log(findVowels("apple"));
function maxNumber(a) {
  let max = 0;
  for (let index = 0; index < a.length; index++) {
    if (a[index] > max) max = a[index];
  }
  return max;
}
console.log(maxNumber([4, 6, 3, 9]));
function sum(a) {
  let sum = 0;
  for (let index = 0; index < a.length; index++) {
    sum += a[index];
  }
  return sum;
}

function splice(arr, start, end,str) {
  let output = [];
  for (let i=start; i <start+end; i++) {
    console.log(arr[i]);
  // output.push(arr[start]);
  }
  return 3
  //output.push(str)
 // return output;
}
console.log(splice(["banana","orange","apple","mongo"],2,1,["kiwi"]));

