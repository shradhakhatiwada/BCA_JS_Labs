var student1 = {
    name: "Ram",
    age: 20
};

var student2 = {
    name: "Sita",
    age: 21
};
//This becomes repetitive when creating many objects.

//Object constructors solve this problem.

function Student(name, age) {
    this.name = name;
    this.age = age;
}
/**
 * function Student() → Constructor function.
this.name = name → Assigns the passed value to the object's name property.
this.age = age → Assigns the passed value to the object's age property.
this refers to the object being created.

*********************************************************
An Object Constructor is a special function used to create and 
initialize multiple objects with similar properties and methods. 
The new keyword is used to create objects from a constructor function.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person("John", 25);

Here, Person is the constructor and p1 is an object created from it.
 */

//Creating Objects Using a Constructor
var student1 = new Student("Ram", 20);
var student2 = new Student("Sita", 21);

//Accessing Properties
console.log(student1.name);
console.log(student2.age);


//Constructor with Methods
function Student(name, age) {
    this.name = name;
    this.age = age;

    this.display = function() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    };
}
//Creating an Object
var student1 = new Student("Ram", 20);

student1.display();

/* How new Works
when you write:
var student1 = new Student("Ram", 20);
JavaScript:
Creates a new empty object.
Sets this to that object.
Executes the constructor function.
Returns the new object.
***********************************************************************

Built-in Constructors

JavaScript already provides constructors such as:

var arr = new Array();
var date = new Date();
var obj = new Object();
*/