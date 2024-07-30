"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var obj = {
  a: 1,
  b: [1, 2],
  c: "string",
  d: {
    x: 1,
    y: 2
  }
};
var arr = [];

for (var key in obj) {
  var value = obj[key];

  if (_typeof(value) === "object" && !Array.isArray(value)) {
    for (var newKey in value) {
      arr.push(key + newKey + value[newKey]);
    }

    continue;
  }

  if (Array.isArray(value)) {
    arr.push(key + value.join(""));
  } else {
    arr.push(obj[key]);
  }
}

console.log(arr);