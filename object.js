/*************** Object Literals ******************/

const sym = Symbol("key1")

const users = {
    name: "hitesh",
    "full name": "Hitesh Choudhary",
    // sym: "mykey1", // ye abhi symbol type nahin hai balki string hai
    [sym]: "mykey1", // symbol added as key in object
    age: 30,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(users.lastLoginDays);
// console.log(users["email"]);
// /* console.log(users.full name); can not access with dot */
// console.log(users["full name"]);
// console.log(users[sym]); // this is the correct syntax

/* object value can be override */
// users.email = "hitesh@chatgpt.com"
// console.log(users);

/* object can be freez */
// Object.freeze(users); // after this nothing can be changed
// users.email = "hitesh@google.com";
// console.log(users);

/* adding function in object */
// users.greeting = function(){
//     console.log("Hello JS Users");
// }

// console.log(users.greeting); // [Function (anonymous)] only reference given function not executing
// console.log(users.greeting()); // Hello JS Users

// users.greeting1 = function(){
//     console.log(`Hello JS Users, ${this.name}`);
// }

// console.log(users.greeting());
// console.log(users.greeting1());

/*************** Object Singleton ******************/

const tinder = new Object();
tinder.id = "12345";
tinder.name = "sammy";
tinder.isLoggedIn = false;
// console.log(tinder);

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        usersFullName: {
            firstName: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.usersFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const User = [ // Array of object
    {
        id: 1,
        email: "asd@gmail.com"
    },
    {
        id: 2,
        email: "fgh@gmail.com"
    },
    {
        id: 3,
        email: "lkj@gmail.com"
    }
]
// console.log(User[1]);

// console.log(Object.keys(tinder)); // output is array of keys
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedIn'));

/******************************Object De-Structuring****************************/

const course = {
    name: "JS in hindi",
    price: "999",
    Instructor: "Hitesh"
}
// console.log(course.Instructor);

const {Instructor} = course
console.log(Instructor);

const {Instructor: ins} = course
console.log(ins);


