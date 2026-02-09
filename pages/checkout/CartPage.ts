import BasePage from '../base/BasePage';

// Selectors used in product list/cart pages.
const CartSelectors = {
  productByName: (name: string) => `[data-test="add-to-cart-${name}"]`,
  cartLink: '[data-test="shopping-cart-link"]',
  checkoutButton: '[data-test="checkout"]',
  cartBadge: '[data-test="shopping-cart-badge"]',
};

class CartPage extends BasePage {
  // Adds one product from inventory view using its slug.
  addProductToCart(productSlug: string): void {
    this.click(CartSelectors.productByName(productSlug));
  }

  // Opens cart details.
  openCart(): void {
    this.click(CartSelectors.cartLink);
  }

  // Starts checkout from cart page.
  goToCheckout(): void {
    this.click(CartSelectors.checkoutButton);
  }

  // Verifies cart item counter in header.
  assertItemsInCart(quantity: number): void {
    cy.get(CartSelectors.cartBadge).should('have.text', String(quantity));
  }
}

export { CartSelectors };
export default CartPage;
