function CustomizePizza(topping, price, count) {
  this.topping = topping;
  this.price = price;
  this.count = count;
}
let cart=[];
CustomizePizza.prototype.addItemToCart = function() {
    
  for (var i = o; i <= cart.length; i++) {
    if (cart[i].topping === topping) {
        cart[i].count ++;
      return;
    }
  }
  
  cart.push(customizePizza);
};
console.log(cart);
 
CustomizePizza.prototype.removeItemToCart = function() {
  for (var i = o; i <= cart.length; i++) {
    if (cart[i].topping === topping) {
        cart[i].count --;
  }
} 
// User Interface
let customizePizza = new CustomizePizza();

customizePizza.addToppings("small", 10);
customizePizza.addToppings("medium", 12);
customizePizza.addToppings("large", 14);
customizePizza.addToppings("pepperoni", 2);
customizePizza.addToppings("cheese", 2);
customizePizza.addToppings("mushroom", 2);
customizePizza.addToppings("onion", 2);



var readyMadePizza = "$10";
$(document).ready(function() {
 

  // for readyMadePizza
  $("#ready").click(function() {
    $("#price").append(readyMadePizza);
  });

  // for customizePizza
  $("#customize").click(function() {
    $(".mainpage").hide(); 
    $(".custom").show();
  });

   // for select/deselect radio button
   $('[type="radio"]').click(function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
      $(this).prop("checked", false);
    } else {
      $(this).attr("checked", "checked");
    }
  });

  // for getting radio button value
  $('#checkoutButton').click(function() {
  var small = $("#small[name=size]:checked").val();
  var medium = $(".medium[name=size]:checked").val();
  var large = $(".large[name=size]:checked").val();
  var value = $("input[name=RadioGroup1]:checked").val();
  var value = $("input[name=RadioGroup1]:checked").val();
  var value = $("input[name=RadioGroup1]:checked").val();
  var value = $("input[name=RadioGroup1]:checked").val();

  console.log("The user selected; " + small);
});





});
