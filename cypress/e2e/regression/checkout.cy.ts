import AuthActions from '../../../actions/auth.actions';
import CheckoutActions from '../../../actions/checkout.actions';

describe('Regression - Checkout flow', () => {
  it('completes checkout with another item', () => {
    const authActions = new AuthActions();
    const checkoutActions = new CheckoutActions();

    authActions.loginAsStandardUser();
    checkoutActions.completeCheckout('sauce-labs-bike-light');
  });
});
