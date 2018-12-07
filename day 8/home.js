
var shoppingCart = [];
var total = 0;

function addItem(a,b){

    var myQuantity = document.getElementById("currCount").value;
    var price = b;
    var productName = a;
    var totalPrice = parseInt(myQuantity) * price;
    total = total + totalPrice;
    var item = productName + " x" + myQuantity + " : $" + totalPrice;

    shoppingCart.push(item);

    document.getElementById("my_shopping_cart").innerHTML = "";
    for (var c = 0 ; c < shoppingCart.length ; c++ ){
    
    var currItem = shoppingCart[c] + "<br>";
    var currResult = document.getElementById("my_shopping_cart").innerHTML
    document.getElementById('my_shopping_cart').innerHTML = currResult + currItem;
    }

    document.getElementById("totalpayable").value = total;

}

function paynow(){
    var amountpaid = document.getElementById("amount").value;
    if (amountpaid >= total){
        document.getElementById("amountchange").value = amountpaid - total;
    }
    else{
        alert("Unable to Pay!");
    }
    
}