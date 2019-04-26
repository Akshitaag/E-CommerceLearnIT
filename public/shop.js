function fetchProducts(done) {
  $.get("/api/products", function(data) {
    done(data);
  });
}

function addProduct(name, vendor, price, quantity, done) {
  $.post(
    "/api/products",
    {
      name: name,
      vendor: vendor,
      price: price,
      quantity: quantity
    },
    function(data) {
      done(data);
    }
  );
}

function createProductCard(product) {
  return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-vendor">${product.vendor}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product.price}</b>
                <br>
                <b>Quantity: ${product.quantity}</b>
            </div>
            <button id="buynow" class="col btn btn-primary m-3">Buy</button> 
        </div>
    </div>`);
}
