// 1.  always specify the return type of a function and the type of the parameters of the function 
//     else typescript will infer the type of the function as any and it can create errors in the code and defeats the purpose of using typescript

    // traditional functions
    function addTwo(num: number): number {
        return num + 2;
    }

    // arrow functions
    const addTwoAgain = (num: number): number => {
        return num + 2;
    }


// 2. optional parameters in a function

    // a) One way to make a parameter optional in a function is to use ? after the parameter name and you can use if statement to check if the parameter is passed or not

    function addTwoNumbers(num1: number, num2?: number): number{
        if (num2) {
            return num1 + num2;
        }

        return num1;
    }


    console.log(addTwoNumbers(5, 10));
    console.log(addTwoNumbers(5));



    // b) Another way to make a parameter optional in a function is to use default value of the parameter

    function addTwoNumbersAgain(num1: number, num2: number = 0): number{
        return num1 + num2;
    }

    console.log(addTwoNumbersAgain(5, 10));
    console.log(addTwoNumbersAgain(5));




