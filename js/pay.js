var cart = document.querySelector(".cart");
cart.addEventListener("click", cartClick);
function cartClick(e) {
  alert("카트에 담겼습니다.");
}

var buy = document.querySelector(".buy");
buy.addEventListener("click", buyClick);
function buyClick(e) {
  var link = "../html/login.html"
  location.href = link;
} 