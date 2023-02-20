const productSelectors = {
  //pop-up
  modalContent: '#cartModal',
  productN1Add:
    ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn',
  productN2Add:
    ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn',
  productN3Add:
    ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn',
  continueButton: '.modal-footer .btn',
  viewCart: '.text-center [href="/view_cart"]',
  //product cards
  productN1: '#product-1',
  productN2: '#product-2',
  productN3: '#product-3',
  cartPrice1: '#product-1 .cart_price',
  cartPrice2: '#product-2 .cart_price',
  cartPrice3: '#product-3 .cart_price',
  cartQuantity1: '#product-1 .cart_quantity',
  cartQuantity2: '#product-2 .cart_quantity',
  cartQuantity3: '#product-3 .cart_quantity',
  cartTotal1: '#product-1 .cart_total',
  cartTotal2: '#product-2 .cart_total',
  cartTotal3: '#product-3 .cart_total',
  viewProduct: '.features_items .col-sm-4 a:contains("View Product")',
  addProduct:
    '.features_items .product-image-wrapper .single-products .add-to-cart',

  //view product details
  productTitle: '.product-information h2',
  productCategory: '.product-information p:contains("Category")',
  productPrice: '.product-information span:contains("Rs")',
  productAvailability: '.product-information p:contains("Availability")',
  productCondition: '.product-information p:contains("Condition")',
  productBrand: '.product-information p:contains("Brand")',

  //review
  reviewIdentifier: '.active a:contains("Write Your Review")',
  reviewMessageSuccess: '#review-section .alert-success > span',
  reviewButton: '#button-review',
}

export { productSelectors }
