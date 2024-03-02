//  1. Union Type - You can use a union type to specify that a variable can have one of the specified types.
//  Keep it as strict as possible by only allowing the types that you expect.

let score: number | string = 10;
score = "10";

// Use conditional statements to check the type of the variable before performing operations.
// Here typeof is a type guard that checks the type of the variable.
function editScore(score: number | string) {
    if (typeof score === "number") {
        score.toFixed(2);
    }

    if (typeof score === "string") {
        score.toUpperCase();
    }
}







//  2. When you want only specific values assigned to the variable.
let seatAllocation: "window" | "middle" | "aisle" = "window";

seatAllocation = "middle";
// seatAllocation = "crew"; // Error: Type '"crew"' is not assignable to type '"window" | "middle" | "aisle"'.







//  3. Array Union - You can use a union type to specify that an array can have one of the specified types.
let users4: (string | number)[] = ["Varchasva", 20, "Raj", 21];
users4.push("Raj", 21, "Varchasva", 20);
// users4.push(true); // Error: Argument of type 'true' is not assignable to a parameter of type 'string | number'.







//  4. Type Union - You can use a type union to specify that a variable can have one of the specified types.
//  i.e. the Type Union should have all the attributes of one of the types but not necessarily all the attributes of every type.

type User = {
    _id: string,
    name: string,
    age: number,
    isPaid: boolean,
    creditCard: number
};

type Admin = {
    _id: string,
    name: string,
    adminaccess: boolean,
    adminpassword: string
};

type UserOrAdmin = User | Admin;

// The object user6 has all the attributes of User and some attributes of Admin.
const user6: UserOrAdmin = {
    _id: "1",
    name: "Varchasva",
    age: 20,
    isPaid: true,
    creditCard: 123456789,
    // adminaccess: true // Error: Property 'adminaccess' is missing in type 'User'.
};

// The object user7 has all the attributes of Admin and some attributes of User.
const user7: UserOrAdmin = {
    _id: "1",
    name: "Varchasva",
    adminaccess: true,
    adminpassword: "adminpassword"
    // age: 20 // Error: Property 'age' is missing in type 'Admin'.
};


export {}