//-------------------------------------------------------------
console.log("1: forEach");

function myEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}
function addTwo(x) {
  console.log(x + 2);
}
let testArr1 = [1, 2, 3];
myEach(testArr1, addTwo);

//-------------------------------------------------------------
console.log("2: map");

function myMap(arr, cb) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i]);
    tempArr.push(result);
  }
  return tempArr;
}
function timesTwo(x) {
  return x * 2;
}
let testArr2 = [2, 4, 6];
console.log(myMap(testArr2, timesTwo));

//-------------------------------------------------------------
console.log("3: filter");

function myFilter(arr, cb) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}
function isEven(x) {
  return x % 2 === 0;
}

let testArr3 = [4, 5, 6, 7, 8];
console.log(myFilter(testArr3, isEven));

//-------------------------------------------------------------
console.log("4: mySome");

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true;
    }
  }
  return false;
}
function hasOdd(x) {
  return x % 2 !== 0;
}

let testArr4 = [2, 3, 4, 6];
console.log(mySome(testArr4, hasOdd));

//-------------------------------------------------------------
console.log("5: every");

function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) {
      return false;
    }
  }
  return true;
}
function greaterThanTen(x) {
  return x > 10;
}

let testArr5 = [22, 54, 36, 2];
console.log(myEvery(testArr5, greaterThanTen));

//-------------------------------------------------------------
console.log("6: reduce");

function myReduce(arr, cb, initialVal = 0) {
  let result = initialVal;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i]);
  }
  return result;
}
function combine(a, b) {
  return a + b;
}

testArr6 = [1, 2, 3, 4, 5];
console.log(myReduce(testArr6, combine));

//-------------------------------------------------------------
console.log("7: includes");

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

testArr7 = ["A", "B", "C"];
console.log(myIncludes(testArr7, "B"));

//-------------------------------------------------------------
console.log("8: indexOf");

function myIndexOf(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}

testArr8 = [1, 4, 6, 8];
console.log(myIndexOf(testArr8, 6));

//-------------------------------------------------------------
console.log("9: push");

function myPush(arr, elementToAdd) {
  arr[arr.length] = elementToAdd;
  return arr.length; // The push method returns the new length of the array
}

testArr9 = [1, 2, 3, 4];
console.log(myPush(testArr9, 5));
console.log(testArr9);

//-------------------------------------------------------------
console.log("10: lastIndexOf");

function myLastIndexOf(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }
  return index;
}

testArr10 = [1, 2, 3, 2, 4];
console.log(myLastIndexOf(testArr10, 2));

//-------------------------------------------------------------
console.log("11: Object.keys");

Object.prototype.grabKeys = function () {
  let keyArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {
      // Function will print out itself as an element without hasOwnProperty
      keyArr.push(element);
      // myPush(keyArr, element); // using myPush from earlier
    }
  }
  return keyArr;
};

let testDict1 = {
  1: 12,
  2: 24,
  3: 36,
};
console.log(testDict1.grabKeys());

//-------------------------------------------------------------
console.log("12: Object.values");

Object.prototype.grabValues = function () {
  let valArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {
      // Function will print out itself as an element without hasOwnProperty
      valArr.push(this[element]);
      // myPush(keyArr, element); // using myPush from earlier
    }
  }
  return valArr;
};

let testDict2 = {
  A: "a",
  B: "b",
  C: "c",
};
console.log(testDict2.grabValues());
