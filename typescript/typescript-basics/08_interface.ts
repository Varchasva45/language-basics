// 1. What is an interface? 
// An interface is a way to define a contract for a function with respect to the arguments and their types.

interface User {
    readonly id: number;
    name: string;
    age: number;
    email: string;
    phone: number;
    buyCourse: () => string;
    checkAttendance(id: number): number;
}






// 2. Properties of an interface 

// a) You can add more properties to the interface after defining it.

interface User {
    address: string;
}

const user: User = {

    id: 1,
    name: 'varchasva',
    age: 25,
    email: 'varchasva.tnp@gmail.com',
    phone: 1234567890,
    address: '123, abc street, xyz city',
    buyCourse: function() {
        return 'I have bought a course';
    },

    checkAttendance(id: 21) {
        return 49;
    }, 
}


// b) Interface extends interface.
// An interface that extends another interface inherits all the properties of the parent interface.

interface Admin extends User {
    deleteUser(id: number): boolean;
}

const admin: Admin = {
    id: 2,
    name: 'admin',
    age: 30,
    email: 'admin@gmail.com',
    phone: 1234567890,
    address: '123, abc street, xyz city',
    buyCourse: function() {
        return 'I have bought a course';
    },

    checkAttendance(id: 21) {
        return 49;
    },

    deleteUser(id: 21) {
        return true;
    }
}






// 3. Differences between interface and type:

// 1. Interfaces are extended by other interfaces, but types are not. Types can be used to create unions and intersections.
// 2. Interfaces can be reopened (changed) to add more properties, but types cannot be reopened.


export {}