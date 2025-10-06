//object
// const person = {
//         name: "John",
//         age: 30,
//         city: "New York"
//     };
    
//     //accessing object properties
//     console.log(person.name); // Output: "John"
//     console.log(person["age"]); // Output: 30
//this method
    // const person1 = {
    //     name: "John",
    //     age: 30,
    //     city: "New York"
    //     showName: function() {
    //         console.log(this.name);
    //     }
    // };
//this method
const user = {
    f_name: "Akash",
    l_name: "Bhattacharyya",
    age: 26,
    FullName: function() {
        // console.log("Name:" +  this.f_name + " " + this.l_name + " " + "Age: " + this.age);
        console.log(`${this.f_name} ${this.l_name} Age: ${this.age}`)
    }
};
console.log(user.FullName());
user.FullName();
user.city = "Kolkata";
console.log(`${this.city}`);


//call method!
function well(city, state){
    console.log(`Name is ${this.name} and age is ${this.age} ${city} ${state}`)
}
// const user = {
//     name: "Akash B....",
//     age : 26
// }
// well.call(user, "Rampurhat", "W.B" )

const employee = {
    Data: function(Designation, Experience) {
        console.log(`Name:${this.f_name} ${this.l_name} Age: ${this.age} city: ${this.city} ${Designation} ${Experience}`);
    }
};
const emp1 = {
    f_name: "Akash",
    l_name: "Bhattacharyya",
    age: 26,
    city: "Kolkata",
}
employee.Data.call(emp1, "Front-end Dev.", "90+years!!!" )
employee.Data.apply(emp1, ["Front-end Dev.", "90+years!!!"] )


const student1 = {   
   name: "Jack",     
     grade: "5",   //   
introduction: function () {        
console.log(this.name + " studies in grade " + this.grade + " score " + this.score  + ".");   
},  
};   
 const student2 = {   
      name: "Jimmy",   
      grade: "6", 
      score: "40" 
      };
let result= student1.introduction.bind(student1); // 
console.log(result()); //
let result2= student1.introduction.bind();   
// result2(); //  
student1.introduction();


//Use apply to calculate the maximum from an array.
const numbers = [2, 8, 15, 4];
console.log(Math.max.apply(null, numbers));
console.log(Math.max.apply("", numbers));