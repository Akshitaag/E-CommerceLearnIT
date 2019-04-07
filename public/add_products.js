$(function() {
  let productName = $("#productName");
  let productVendor = $("#productVendor");
  let productPrice = $("#productPrice");
  let productQuantity = $("productQuantity");

  $("#btnProductAdd").click(function() {
    addProduct(
      productName.val(),
      productVendor.val(),
      productPrice.val(),
      productQuantity.val(),
      function(addedProduct) {
        window.alert("Added " + addedProduct.name + " to Database");
      }
    );
  });
});
