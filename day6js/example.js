function print(number) {
  for (let i = 1; i <= number; i++) {
    let sequence = "";
    for (let j = 0; j < i; j++) {
      sequence += i;
    }
    console.log(sequence);
  }
}

//print(10)
//9-----------------------------------------------------------------------------
function swapStringCase(st) {
  let result = [];
  for (let i = 0; i < st.length; i++) {
    if (st.charAt(i) === st.charAt(i).toLowerCase()) {
      result.push(st.charAt(i).toUpperCase());
    } else if (st.charAt(i) === st.charAt(i).toUpperCase()) {
      result.push(st.charAt(i).toLowerCase());
    }
  }
  return result.join("");
}

//console.log(swapStringCase("abcdefghijklmnopqrstuvwxyz"));
//10--------------------------------------------------------------
function printsTheElements(arr) {
  let sum = 0;
  for (const num in arr) {
    sum += Math.pow(arr[num], 2);
  }
  return sum;
}
//console.log(printsTheElements([1,2,3]));
//12---------------------------------------------------------------------
function removeDuplicate(arr) {
  let ss = new Set(arr);
  return [...ss];
}
//console.log(removeDuplicate([4, 3, 2, 4, 3, 2]));
//16-------------------------------------------------------------------
function findLeapYear(from, to) {
  let arrOfYear = [];

  for (let i = from; i < to; i++) {
    arrOfYear.push(from++);
  }
  console.log(arrOfYear);
  let arr = [];
  arrOfYear.forEach((year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        arr.push(year)
    }
  });
  return arr;
}
///console.log(findLeapYear(2000,2012));

function 
