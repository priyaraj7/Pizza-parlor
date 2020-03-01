function Pizza(size, price, toppings) {
  this.size = size;
  this.price = price;
  this.toppings = [];
}
Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.getTotalPrice = function() {
  let total = 0;
  for (let i = 0; i < this.toppings.length; i++) {
    total = total + this.toppings[i].price;
  }
  return total + this.price;
};

// let pizza = new Pizza("small", 10);

// pizza.addToppings({ name: "paparoni", price: 2 });
// pizza.addToppings({ name: "mushroom", price: 2 });
// pizza.addToppings({ name: "red onion", price: 2 });
// pizza.addToppings({ name: "cheese", price: 2 });

// function displayCartDetails(itemsToDisplay) {
//   var itemList = $("ul#show-cart");
//   var htmlForCartInfo = "";
//   itemsToDisplay.items.forEach(function(item) {
//     htmlForCartInfo += "<li id=" + item.id + ">" + item.firstName + " " + item.lastName + "</li>";
//   });
//   itemList.html(htmlForCartInfo);
// };

var readyMadePizza = "15";
$(document).ready(function() {
  // for readyMadePizza
  $("#ready").click(function() {
    $("#price").empty();
    $("#price").append(readyMadePizza);
    $(".order").show();
    // $(".mainpage").hide();
  });

  // for customizePizza
  $("#customize").click(function() {
    $(".mainpage").hide();
    $(".order").hide();
    $(".custom").show();
  });

  $("#checkoutButton").click(function() {
    $("#price").empty();
    // for getting radio button value
    var sizeEl = $('input[name="size"]');
    // getting the value form checkbox
    const selectedToppings = Array.from($(".toppings:checked")).map(topping =>
      $(topping).data()
    );
    const pizza = new Pizza(sizeEl.val(), sizeEl.data("price"));
    selectedToppings.forEach(topping => pizza.addToppings(topping));
    $("#price").append(pizza.getTotalPrice());
    $(".order").show();
  });
  // thank you page
  $(".place-order").click(function() {
    $(".order").hide();
    $(".custom").hide();
    $(".mainpage").hide();
    $(".thanks").show();
  });
});
