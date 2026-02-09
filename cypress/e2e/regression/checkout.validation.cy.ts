import AuthActions from '../../../actions/auth.actions';
import CartPage from '../../../pages/checkout/CartPage';
import PaymentPage from '../../../pages/checkout/PaymentPage';

describe('Regression - Checkout validations', () => {
  it('shows validation error when first name is missing', () => {
    const authActions = new AuthActions();
    const cartPage = new CartPage();
    const paymentPage = new PaymentPage();

    authActions.loginAsStandardUser();
    cartPage.addProductToCart('sauce-labs-backpack');
    cartPage.openCart();
    cartPage.goToCheckout();

    paymentPage.fillCheckoutForm({
      firstName: '',
      lastName: 'Automation',
      postalCode: '90210',
    });

    paymentPage.assertCheckoutError('Error: First Name is required');
  });

  it('returns to cart when checkout is cancelled', () => {
    const authActions = new AuthActions();
    const cartPage = new CartPage();
    const paymentPage = new PaymentPage();

    authActions.loginAsStandardUser();
    cartPage.addProductToCart('sauce-labs-backpack');
    cartPage.openCart();
    cartPage.goToCheckout();

    paymentPage.cancelCheckout();
    cy.url().should('include', '/cart.html');
  });
});
