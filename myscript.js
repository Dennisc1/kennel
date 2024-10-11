function Calculate(){
  let size = document.getElementById("size").value;
  let days = document.getElementById("days").value;
  let price = size*parseInt(days);
  let tax = parseFloat((.0485*price).toFixed(2));
  let total = price+tax;
  document.getElementById("price").textContent = `Price: $${price}`
  document.getElementById("tax").textContent = `Tax: $${tax}`
  document.getElementById("total").textContent = `Total: $${total}`
}
