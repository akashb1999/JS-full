//array in object
const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "playing games"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};
//object in array
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];

console.log(person.hobbies[1]);
console.log(people[1].name);


//find the students with 21 and more only and starts with c
const students = [   
    { id: 1, name: 'Alice', age: 20 },   
    { id: 2, name: 'Bob', age: 22 },     
    { id: 3, name: 'Charlie', age: 21 }   
];

const filteredStudents = students.filter(student => student.age >= 21 && student.name.startsWith('C'));   
console.log(filteredStudents);



// function updateName(object, id, providedname){ // return object.map((data)=> data.id === id ? {...data, name:providedname} : data) const student = object.find((value)=> value.id === id); if(student){    return student.name = providedname } } console.log(updateName(students, 2, "tanmay"));



//object distracting

const person1 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "playing games"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

//accessing object properties
console.log(person.name); // Output: "John"
console.log(person["age"]); // Output: 30

//some and every
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some(number => number > 3)); // Output: true
console.log(numbers.every(number => number > 0)); // Output: true




//JSON.stringify
const person2 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "playing games"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};
const jsonString = JSON.stringify(person2);//for upload in server quickly! ***
console.log(jsonString);


//JSON.parse for JSON string back into JS object!
const jsonString2 = '{"name": "John", "age": 30, "hobbies": ["reading", "coding", "playing games"], "address": {"street": "123 Main St", "city": "New York", "state": "NY"}}';
const person3 = JSON.parse(jsonString2);
console.log(person3);