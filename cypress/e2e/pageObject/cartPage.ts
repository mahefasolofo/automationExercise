const cartSelectors = {
  emptyCart: '#empty_cart',
  clickHere: '#empty_cart .text-center a:contains("here")',
  checkoutButton: '.check_out',
  cardNumberField: '[name="card_number"]',
  cvcField: '[name="cvc"]',
  expiryMonthField: '[name="expiry_month"]',
  expiryYearField: '[name="expiry_year"]',
  firstProductImage: '#product-1 > .cart_product > a > .product_image',
  productDetailsIdentifier: '.product-details',
}

export { cartSelectors }
