// //print only the catgory a 
// const arrobj = [
//     { id: 1, name: "product1", category: "a", price: 1000 }, 
//     { id: 2, name: "product2", category: "b", price: 8000 }, 
//     { id: 3, name: "product3", category: "a", price: 1700 }, 
//     { id: 4, name: "product4", category: "a", price: 4000 },  
// ]

// const filteredProducts = arrobj.filter(product => product.category === "a");
// console.log(filteredProducts);



//make a class and with constructor with firstname last name age designation city  
class User{ 
    constructor(f_name, l_name, age, city, designation) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.age = age;
        this.city = city;
        this.designation = designation;
    }
    getDetails() {
        console.log(`Name:${this.f_name} ${this.l_name} Age: ${this.age} city: ${this.city} ${this.designation}`);
    }
}
// const user1 = new User("Akash", "Bhattacharyya", 26, "Kolkata", "Front-end Dev.");
// user1.getDetails();

//inheritence 
class Employee extends User {
    constructor(f_name, l_name, age, city, designation, pin, state) {
        super(f_name, l_name, age, city, designation);
        this.pin = pin;
        this.state = state;
    }
    
}
const emp1 = new Employee("Akash", "Bhattacharyya", 26, "Kolkata", "Front-end Dev", 731224, "WB.");
// emp1.getDetails();
console.log(emp1);