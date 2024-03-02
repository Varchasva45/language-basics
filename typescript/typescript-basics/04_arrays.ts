// 1. declare an array of primitive data types
    const users1: string[] = ['varchasva', 'nandini'];
    users1.push('rakhi');

    const users2: Array<string> = ['varchasva', 'nandini'];
    users2.push('rakhi');


// 2. declare an array of objects
    type User = {
        name: string, 
        isActive: boolean
    }

    const users3: User[] = [];

    users3.push({name: 'varchasva', isActive: true});
    users3.push({name: 'nandini', isActive: false});


    export {}