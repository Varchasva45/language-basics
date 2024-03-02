// 1. Types in typescript


    // You can write :number or :boolean  to specify the type of the variable but
    // typescript is smart enough to infer the type of the variable from the value assigned to it.
    // So, you can write the below line as: 
    // let greetings = "Hello Varchasva";

    let greetings: string = "Hello Varchasva";
    let userId: number = 20;
    let isUserLoggedIn: boolean = true;

    console.log(greetings);


// 2. any type

    // here the type of the variable is any if you don't specify the type of the variable
    // let hero || let hero: any;
    // you should avoid using any type as it defeats the purpose of using typescript

    let hero: string;

    function getHero() {
        return "Iron Man";
    }

    hero = getHero();



