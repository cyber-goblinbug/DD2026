// non-primitives data types
let person = {
    firstName: "john",
    lastName: " Doe",
    age: 30,
    address:{
        street: "123 MainSt",
        city: "New York",
        zipcode: "10001"
    }
};
console.log(person)
console.log(person.firstName);
console.log(person.address.city);

person.email = "wjw67@miami.edu";
console.log(person)

let person2 = {}
person2