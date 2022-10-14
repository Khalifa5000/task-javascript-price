

var list = document.querySelectorAll(".list li")
var content = document.querySelector("#choose")
var btn = document.querySelector("#product-price")
var showPrice = document.querySelector("#show-price")
var totalPrice =  0 ;

    list.forEach(function (item){
    item.onclick = function(){
        content.innerHTML += item.textContent + " <br> " ;
         if (content.innerHTML !=" "){
        btn.style.transform="scale(1)";
        content.style.display ="block"; 
    }
    totalPrice += parseInt(item.getAttribute("price")) 
    }
}
    )
    btn.onclick = function(){
        showPrice.innerHTML=(totalPrice);
        showPrice.style.transform="scale(1)";
     if (totalPrice >= 100000){
        showPrice.style.backgroundColor="rgb(9, 201, 100)";
    }
    }
   
