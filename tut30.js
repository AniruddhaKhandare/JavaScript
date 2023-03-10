console.log("This is tutorial 30");

const proto = {

    slogan: function () {
        return `This company is the best`
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates green object
let green = Object.create(proto);
green.name = "green";
green.role = "Coder";
green.changeName("green");
// console.log(green);

// This also creates green object
const green = Object.create(proto, {
    name: { value: "Red", writable: true },
    role: { value: "Coder" },
})

green.changeName("red");
// console.log(green);


// Employee constructor

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards,${this.name}`;
}

// Create an Object from this constructor
let greenObj = new Employee("Red", 80000, 55);
console.log(greenObj.slogan());

// Coder
function Coder(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Coder.prototype = Object.create(Employee.prototype);

// Mgreenally set the constructor
Coder.prototype.constructor = Coder;

let rohan = new Coder("Rohan", 2, 0, "JavaScript");
console.log(rohan);