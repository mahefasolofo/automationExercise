/// <reference types="cypress" />

describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Tests Case 20', () => {
    // 3. Click on 'Products' button
    cy.get('li').contains('Products').click()
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.get('.features_items > h2').contains('All Products').should('exist')
    // 5. Enter product name in search input and click search button
    cy.get('#search_product').type('Tshirt')
    cy.get('#submit_search').click()
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    cy.get('.features_items > h2').contains('Searched Products').should('exist')
    // 7. Verify all the products related to search are visible
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('Tshirt')
    cy.get(
      ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirt')
    cy.get(
      ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirt')
    cy.get(
      ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirts')
    cy.get(
      ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('Tshirt')
    cy.get(
      ':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T SHIRT')
    // 8. Add those products to cart
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    // 9. Click 'Cart' button and verify that products are visible in cart
    cy.get('li').contains('Cart').click()
    cy.get('#cart_info_table #product-2').should('exist')
    cy.get('#cart_info_table #product-28').should('exist')
    cy.get('#cart_info_table #product-29').should('exist')
    cy.get('#cart_info_table #product-30').should('exist')
    cy.get('#cart_info_table #product-31').should('exist')
    cy.get('#cart_info_table #product-43').should('exist')
    // 10. Click 'Signup / Login' button and submit login details
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('john@example.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    // 11. Again, go to Cart page
    cy.get('li').contains('Cart').click()
    // 12. Verify that those products are visible in cart after login as well
    cy.get('#cart_info_table #product-2').should('exist')
    cy.get('#cart_info_table #product-28').should('exist')
    cy.get('#cart_info_table #product-29').should('exist')
    cy.get('#cart_info_table #product-30').should('exist')
    cy.get('#cart_info_table #product-31').should('exist')
    cy.get('#cart_info_table #product-43').should('exist')
  })
})
