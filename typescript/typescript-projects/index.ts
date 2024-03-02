// Access Modifiers
// public(default), private, protected

// One way to write class (bulky)
class User {
    private email: string;
    private name: string;
    city: string = "";
    readonly id: number;

    constructor(email: string, name: string, id: number) {
        this.email = email;
        this.name = name;
        this.id = id;
    }
}

const user1 = new User('u@gmail.com', 'user1', 5);
user1.city = 'New York';

// Another way to write class (short)
class User2 {
    city: string = "";
    constructor(
        private email: string, 
        private name: string, 
        public id: number
    ) {}

    // get keyword is used to mark a method as a getter
    get getEmail(): string {
        return this.email;
    }
    
    // set keyword is used to mark a method as a setter, a set method must not have any return type anotation, not even void
    set setCity(city: string) {
        this.city = city;
    }
}

