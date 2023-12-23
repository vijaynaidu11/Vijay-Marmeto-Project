function addToCart() {
    
    var size = document.querySelector('input[name="size"]:checked');
    var color = document.querySelector('input[name="color"]:checked');
    var quantity = document.getElementById('quantity').value;

    
    var selectedDetails = document.getElementById('selected');
    if (size && color && quantity) {
        selectedDetails.innerHTML = "Embrace SideBoard in  "+color.value+" color  and  " + size.value + "  size with Quantity of " + quantity+" added to the cart ✔️";
    } else {
        selectedDetails.innerHTML = "Please select size and enter quantity.";
    }
}

function changeImage(thumbnail){
   var big = document.getElementById('bigone');
   big.src = thumbnail.src;
}

var originalPrice = document.getElementById('cost');
var sellingPrice = document.getElementById('selling');

var original = parseFloat(originalPrice.innerText.replace("$", ""));
var selling = parseFloat(sellingPrice.innerText.replace("$",""));

var discount = ((original-selling)/original)* 100;

var discountElement = document.createElement("h3");

discountElement.innerText = discount.toFixed(0)+"% off";

discountElement.style.color = "rgb(223, 96, 96)";
discountElement.style.marginLeft = "3%";
discountElement.style.marginTop = "4%";
document.querySelector(".prices").appendChild(discountElement);
