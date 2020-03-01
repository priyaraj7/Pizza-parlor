function Pizza(size, price) {
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

var readyMadePizza = "15";
$(document).ready(function() {
  // for readyMadePizza
  $("#ready").click(function() {
    $("#price").empty();
    $("#price").append(readyMadePizza);
    $(".order").show();
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
    let sizeEl = $('input[name="size"]:checked');
    // getting the value form checkbox
    let selectedToppings = Array.from($(".toppings:checked")).map(topping =>
      $(topping).data()
    );
    const pizza = new Pizza(sizeEl.val(), sizeEl.data("price"));
    selectedToppings.forEach(topping => pizza.addToppings(topping));

    if (sizeEl.length === 0) {
      alert("Please select size.");
    } else {
      $("#price").append(pizza.getTotalPrice());
      $(".order").show();
    }
  });
  // thank you page
  $(".place-order").click(function() {
    $(".order").hide();
    $(".custom").hide();
    $(".mainpage").hide();
    $(".thanks").show();
  });
});
