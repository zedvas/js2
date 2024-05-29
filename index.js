// 1.	Create a function that accepts two numbers, adds them and returns the result.
var addTwoNumbers = function (x, y) {
  return x + y;
};

console.log(addTwoNumbers(11, 44));

// 2.	Write a function with the following behavior
//      -    takes an array as a parameter
//      -    reverses the order of the array
//      -    returns the reversed array
var reverseArray = function (arr) {
  return arr.reverse();
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//  4. Create an array with 10 items
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  5. Update one of the items
myArray[0] = "A";
console.log(myArray);

//  6. Delete half of the array
myNewArray = myArray.slice(0, 5);
console.log(myNewArray);

//  7. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)
//    Pop
console.log(myArray.pop());
console.log(`myArray now looks like: ${myArray}`);

//    Push
console.log(myArray.push(9));
console.log(myArray);

//    Shift
console.log(myArray.shift());
console.log(myArray);

//    Unshift
console.log(myArray.unshift(0));
console.log(myArray);

//    Concatenating
var anotherArray = [10, 11, 12, 13, 14, 15];
console.log(myArray.concat(anotherArray));

// Splicing
console.log(myArray.splice(10, 6, "A", "B", "C"));
console.log(myArray);

//     Slicing
console.log(myArray.slice(10, 13));
console.log(myArray);

//    Reverse
console.log(myArray.reverse());

//    Join
console.log(myArray.join(" - "));
console.log(myArray);

//    forEach
myArray.forEach(function (item, index) {
  console.log(`item is ${item} and index is ${index}`);
});

//    Includes
console.log(myArray.includes("B"));
console.log(myArray.includes(99));

//    indexOf
console.log(myArray.indexOf("A"));
console.log(myArray.indexOf(99));

//    Every
console.log(
  myArray.every(function (item) {
    return typeof item == "number";
  })
);

//    Some
console.log(
  myArray.some(function (item) {
    return typeof item == "number";
  })
);

//    Filter
console.log(
  myArray.filter(function (item) {
    return typeof item == "number";
  })
);

//    Find
console.log(
  myArray.find(function (item) {
    return item >= 4;
  })
);

//    findIndex
console.log(myArray.indexOf(4));

//    Sort
console.log(
  myArray.sort(function (item1, item2) {
    if (item1 > item2) {
      return 1;
    }
    if (item2 > item1) {
      return -1;
    }
    return 0;
  })
);

//    Map
console.log(
  myArray.map(function (item) {
    if (typeof item == "number") {
      return item * item;
    }
    return item + item;
  })
);
