//Q1
function checkRange(number, lowerLimit, upperLimit) {
    if (number >= lowerLimit && number <= upperLimit) {
        console.log("The number is within the range");
    } else {
        console.log("The number is outside the range");
    }
}
checkRange(10, 1, 10);
console.log('-------------------');
//Q3
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    display() {
        super.display();
        console.log(`Number of Doors: ${this.numDoors}`);
    }
}
const car = new Car("Tata", "Maruti", 2022, 4);
car.display();
console.log('-------------------');
//Q4
class Employee {
    constructor(empName, empId, empDesg, experience) {
        this.empName = empName;
        this.empId = empId;
        this.empDesg = empDesg;
        this.experience = experience;
    }
    getSalary() {
        if (this.empDesg === "Manager" && this.experience > 8) {
            return 120000;
        } else if (this.empDesg === "Manager" && this.experience <= 8) {
            return 95000;
        } else if (this.empDesg === "TL" && this.experience > 4) {
            return 85000;
        } else if (this.empDesg === "TL" && this.experience <= 4) {
            return 75000;
        } else {
            return 45000;
        }        
    }
}
const emp = new Employee("Akash Bhattacharyya ", 783, "Manager", 7);
console.log(`Name:${emp.empName} Id:${emp.empId} Designation:${emp.empDesg} Experience:${emp.experience} Salary:${emp.getSalary()}`);
console.log('-------------------');
//Q5
const products = [
{id: 1, product: "Book", price: 10, quantity: 2},
{id: 2, product: "Pen", price: 7, quantity: 6}
]
function updateNameById(arr, id, updatedName) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            arr[i].product = updatedName;
            break;
        }
    }
}
updateNameById(products, 2, "Pencil");
console.log(products);
console.log('-------------------');

//Q6
const totalMarks = 500;
const bengali = 80;
const english = 87;
const physics = 75;
const chemistry = 78;
const mathematics = 95;
const totalObtainedMarks = bengali + english + physics + chemistry + mathematics;
const marksPercentage = (totalObtainedMarks / totalMarks) * 100;
let grade;
if (marksPercentage >= 90) {
    grade = "AA";
} else if (marksPercentage >= 80) {
    grade = "A+";
} else if (marksPercentage >= 70) {
    grade = "A";
} else if (marksPercentage >= 60) {
    grade = "B+";
} else if (marksPercentage >= 50) {
    grade = "B";
} else if (marksPercentage >= 40) {
    grade = "C";
} else {
    grade = "D";
}
console.log(`Total Marks: ${totalObtainedMarks}, Marks Percentage: ${marksPercentage.toFixed(2)}%, Grade: ${grade}`);
console.log('----------------------------------------------------------------------');
//Q2
const newEmployeeDetails={
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "mailto:sincere@april.biz",
address: {
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
geo: {
lat: "-37.3159",
lng: "81.1496"
}
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company: {
name: "Romaguera-Crona",
catchPhrase: "Multi-layered client-server neural-net",
bs: "harness real-time e-markets"
}
}
const {address: {geo: {lat, lng}}} = newEmployeeDetails;
console.log(`Lat: ${lat}, Lng: ${lng}`);
// const {address,...others} = newEmployeeDetails; 
// const {geo,...extra} = address; 
// const {lat,lng} = geo;
console.log('----------------------------------------------------------------------');