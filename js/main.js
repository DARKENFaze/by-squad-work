document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".fa-search");
  searchIcon.addEventListener("click", function () {
    alert("Search icon clicked");
  });

  const cartIcon = document.querySelector(".fa-shopping-cart");
  cartIcon.addEventListener("click", function () {
    alert("Cart icon clicked");
  });

  const userIcon = document.querySelector(".fa-user");
  userIcon.addEventListener("click", function () {
    alert("User icon clicked");
  });
});

// ar
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.querySelector("chatgpt-sidebar");
  if (sidebar) {
    sidebar.remove();
  }
});
