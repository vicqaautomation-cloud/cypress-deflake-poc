import CartPage from '../pages/checkout/CartPage';
import PaymentPage from '../pages/checkout/PaymentPage';

class CheckoutActions {
  private readonly cartPage = new CartPage();
  private readonly paymentPage = new PaymentPage();

  // End-to-end checkout flow from inventory to confirmation.
  completeCheckout(productSlug: string): void {
    this.cartPage.addProductToCart(productSlug);
    this.cartPage.assertItemsInCart(1);
    this.cartPage.openCart();
    this.cartPage.goToCheckout();

    this.paymentPage.fillCheckoutForm({
      firstName: 'QA',
      lastName: 'Automation',
      postalCode: '90210',
    });

    this.paymentPage.finishCheckout();
    this.paymentPage.assertOrderCompleted();
  }
}

export default CheckoutActions;
