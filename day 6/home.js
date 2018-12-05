/*

*/

function calculate(myLocation, myLocation2, myLocation3) {

    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2;
    console.log(myName);

}

calculate("One North", "JTC Launchpad");

calculate("test", "test");

function getMyFullName(){
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;

    return fullName;
}

console.log(getMyFullName());

function greet(firstName2, lastName2, bornyear) {
    var age = 2018 - bornyear;
    var greeting = "Hello, " + firstName2 + " " + lastName2 + ", " + age;
    return greeting
}

console.log(greet("Michael", "Jordan", 1988));
console.log(greet("Nauro", "Icardi", 1987));
console.log(greet("Lionel", "Messi", 1879));

function testMe(){
    alert("Hi you hit the button")
}