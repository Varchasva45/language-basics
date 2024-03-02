// 1. Abnormal behavior of objects - TypeScript will not throw an error if you pass an object with extra parameters to a function that is expecting an object with specific parameters

function createUser({ name, age, isPaid }: { name: string, age: number, isPaid: boolean }): { name: string, age: number, isPaid: boolean } {
    return { name, age, isPaid };
}

// You cannot call the function with 4 parameters as the function is expecting three parameters
// createUser("Varchasva", 20, true, "extra parameter");
// but if you call the function with an object that has 4 parameters, it will not throw an error

const User = {
    name: "Varchasva",
    age: 20,
    isPaid: true,
    extra: "extra parameter"
};

createUser(User);







// 2. Type Alias - you can avoid the abnormal behavior of objects by using type alias
// if you want to make your own type for objects, you can use the following syntax

// a) if you want some attribute of your type to be readonly, you can use readonly keyword
// b) if you want some attribute of your type to be optional, you can use ? after the attribute name

type User = {
    readonly _id: string,
    name: string,
    age: number,
    isPaid: boolean
    creditCard?: number
};


// both the user1 and user2 are of type User, one has the creditCard attribute and the other does not as it is optional
const user2: User = {
    _id: "1",
    name: "Varchasva",
    age: 20,
    isPaid: true,
};

const user3: User = {
    _id: "2",
    name: "Varchasva",
    age: 20,
    isPaid: true,
    creditCard: 123456789
};


// user2._id = "2"; // this will throw an error as _id is readonly

function createUserAgain(user: User): User {
    return user;
}


createUserAgain({ _id: "1", name: "Varchasva", age: 20, isPaid: true });







// 3. Type Assertion - you can use type assertion to tell TypeScript that the type of the object is of a specific type

const user4 = {
    name: "Varchasva",
    age: 20,
    isPaid: true
};

// you can use the following syntax to tell TypeScript that the type of the object is of type User
createUserAgain(user4 as User);

// you can also use the following syntax to tell TypeScript that the type of the object is of type User
createUserAgain(<User>user4);


// 4. Type Intersection - you can use type intersection to combine two types into one type
// i.e. type intersection must have all the attributes of both types

type Admin = {
    _id: string,
    name: string,
    adminaccess: boolean,
    adminpassword: string
};

//1.  you can use the following syntax to combine two types into one type
type SuperUser = User & Admin;


// the object superUser has all the attributes of User and Admin
const user5: SuperUser = {
    _id: "1",
    name: "Varchasva",
    age: 20,
    isPaid: true,
    creditCard: 123456789,
    adminaccess: true,
    adminpassword: "adminpassword"
};

createUserAgain(user5);







// 5. Type Union - you can use type union to specify that a variable can have one of the specified types
// i.e. the Type Union should have all the attributes of one of the types but not necessarily all the attributes of every type

type UserOrAdmin = User | Admin;

// the object user6 has all the attributes of User and some attributes of Admin
const user6: UserOrAdmin = {
    _id: "1",
    name: "Varchasva",
    age: 20,
    isPaid: true,
    creditCard: 123456789,
    adminaccess: true
};

// the object user7 has all the attributes of Admin and some attributes of User
const user7: UserOrAdmin = {
    _id: "1",
    name: "Varchasva",
    adminaccess: true,
    adminpassword: "adminpassword"
};

export {};
