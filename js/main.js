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

// select

document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("category-filter");
  const productTypeFilter = document.getElementById("product-type-filter");
  const priceFilter = document.getElementById("price-filter");
  const brandFilter = document.getElementById("brand-filter");
  const dateFilter = document.getElementById("date-filter");
  const productsContainer = document.getElementById("products");
  const allProducts = Array.from(productsContainer.children);

  function filterProducts() {
    const category = categoryFilter.value;
    const productType = productTypeFilter.value;
    const price = priceFilter.value;
    const brand = brandFilter.value;
    const date = dateFilter.value;

    allProducts.forEach((product) => {
      const productCategory = product.getAttribute("data-category");
      const productTypeValue = product.getAttribute("data-type");
      const productPrice = product.getAttribute("data-price");
      const productBrand = product.getAttribute("data-brand");
      const productDate = product.getAttribute("data-date");

      const matchesCategory = !category || productCategory === category;
      const matchesType = !productType || productTypeValue === productType;
      const matchesPrice = !price || productPrice === price;
      const matchesBrand = !brand || productBrand === brand;
      const matchesDate = !date || productDate === date;

      if (
        matchesCategory &&
        matchesType &&
        matchesPrice &&
        matchesBrand &&
        matchesDate
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  categoryFilter.addEventListener("change", filterProducts);
  productTypeFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
  brandFilter.addEventListener("change", filterProducts);
  dateFilter.addEventListener("change", filterProducts);

  // Initial display
  filterProducts();
});
