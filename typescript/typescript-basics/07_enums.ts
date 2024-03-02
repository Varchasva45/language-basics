// What is an enum(enumeration)?
// An enum is a way to organize a collection of related values.


// by default, enums start at 0 and increment by 1
// so window = 0, aisle = 1, middle = 2
enum SeatChoice {
    Window,
    Aisle,
    Middle
}

const mySeat = SeatChoice.Aisle; 
console.log(mySeat);


// you can also set the values manually
enum SeatChoice2 {
    Window = 10,
    Aisle = 20,
    Middle = 30
}

enum SeatChoice3 {
    Window = "aisle",
    Aisle = "window",
    Middle = "middle"
}

// whereever you set a numerical value, the next value will be incremented by 1
enum SeatChoice4 {
    Window = "window",
    Aisle = 10,
    Middle
}