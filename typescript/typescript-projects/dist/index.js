"use strict";
// Access Modifiers
// public(default), private, protected
// One way to write class (bulky)
class User {
    constructor(email, name, id) {
        this.city = "";
        this.email = email;
        this.name = name;
        this.id = id;
    }
}
const user1 = new User('u@gmail.com', 'user1', 5);
user1.city = 'New York';
// Another way to write class (short)
class User2 {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this.city = "";
    }
    // get keyword is used to mark a method as a getter
    get getEmail() {
        return this.email;
    }
    // set keyword is used to mark a method as a setter, a set method must not have any return type anotation, not even void
    set setCity(city) {
        this.city = city;
    }
}
