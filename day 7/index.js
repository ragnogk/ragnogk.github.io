
//get value of html element
document.getElementById("firstNumber").value;
document.getElementById("secondNumber").value;

//to display value
document.getElementById("result").value = "";

function calculate() {
    var result
    
    var a = parseInt(document.getElementById("firstNumber").value);
    var b = parseInt(document.getElementById("secondNumber").value);
    var operation = document.getElementById("operator").value;
    
    if(operation == "+"){
        result = a + b;
    }
    
    else if(operation == "-"){
        result = a - b;
    }
    
    else if(operation == "/"){
        result = a / b;
    }
    
    else if(operation == "*"){
        result = a * b;
    }

    document.getElementById("result").value = result;
}

//morning
//afternoon
//evening

var greet;

greet = "afternoon";

if(greet == "morning"){
    console.log("This is Morning");
}

else if(greet == "afternoon"){
    console.log("This is Afternoon");
}

else if(greet == "evening"){
    console.log("This is Evening");
}

else{
    console.log("Night Time");
}

var greetings = ["Morning", "Afternoon", "Evening"];

console.log(greetings);
console.log(greetings.length);

console.log(greetings[0]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15];

console.log(primeNumber[primeNumber.length -1]);


var step = 0;

while( step < primeNumber.length ){
    console.log(primeNumber[step]);
    step = step + 1;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

//if even number -> "Even Number"
// -> "Not Even Number"

var step2 = 0;

while( step2 < numbers.length ){
    if ((numbers[step2] % 2) == 0){
        console.log(numbers[step2] + " is an even number.");
    }
    else{
        console.log(numbers[step2] + " is not an even number.");
    }
    step2 = step2 + 1;
}

var collections = [];

collections.push("Test");

console.log(collections);
collections.push("Test 2");

console.log(collections);

var myCollections = [];

function addMe(){
    var myText = document.getElementById("myText").value;
    myCollections.push(myText);

    document.getElementById("myResult").innerHTML = "";
    for (var a = 0 ; a < myCollections.length ; a++ ){
        var currValue = myCollections [a] + "<br>";
        var currResultValue = document.getElementById("myResult").innerHTML;
        document.getElementById("myResult").innerHTML = currResultValue + currValue;
    }
    //document.getElementById("myResult").innerHTML = "This is Test only";
}

var test = document.getElementById("myResult").innerHTML;

console.log(test);

