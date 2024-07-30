// let obj = { a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } };
// let arr = [];
// for (const key in obj) {
//   let value = obj[key];
//   if (typeof value === "object" && !Array.isArray(value)) {
//     for (const newKey in value) {
//       arr.push(key + newKey + value[newKey]);
//     }
//     continue;
//   }
//   if (Array.isArray(value)) {
//     arr.push(key + value.join(""));
//   } else {
//     arr.push(obj[key]);
//   }
// }

// console.log(arr);log
//console.log(" ".repeat(5)+"rrrrr"+" ".repeat(5));
const onb = { a: "ahmed", a: { a: "ee", b: "cc" } ,arr:["rr","rr"]};
for (const key in onb) {
   if(typeof onb[key]=='object' &&!Array.isArray(onb[key]) )console.log( onb[key]);
   
}
