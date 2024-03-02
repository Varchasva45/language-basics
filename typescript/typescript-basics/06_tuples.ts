// 1. A tuple is a collection of values of different types that are treated as a single unit

// The difference between declaring a type and a tuple is that:
// - In a tuple, the order of the elements is important, whereas in a type, the order of the elements is not important. 
//   i.e., you can have elements in any order in the object of a type but not in a tuple.
// - In a tuple, the number of elements is important, whereas in a type, the number of elements is not important. 
//   i.e., you can have extra elements in the object of a type.

let myTuple: [number, string, boolean];
type userTupleType = [number, string, boolean];

myTuple = [10, 'varchasva', true];
let user: [number, string, boolean] = [10, 'varchasva', true];






// 2. Properties of a tuple

// Length of a tuple
console.log("Length of tuple:", myTuple.length);

// Iterating through a tuple
for (let item of myTuple) {
    console.log(item);
}

// Accessing elements of a tuple
console.log(myTuple[0]);
console.log(myTuple[1]);

// Modifying elements of a tuple
myTuple[0] = 20;  

// Destructuring a tuple
let [a, b, c] = myTuple;
console.log(a);






// 3. Abnormalities of a tuple => A tuple is used to store a fixed number of elements of different types in a specific order. However, there are some abnormalities of a tuple.
//    Since a tuple is an array of fixed length, it is possible to add more elements to a tuple which are not defined using the push method. This should not be allowed but it is possible.
//    Other array methods like pop, shift, unshift, splice, etc. can also be used on a tuple. This should not be allowed but it is possible.

myTuple.push(100);  // This should not be allowed but it is possible