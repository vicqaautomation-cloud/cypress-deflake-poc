import AuthActions from '../../../actions/auth.actions';
import CheckoutActions from '../../../actions/checkout.actions';

describe('Sanity - Checkout', () => {
  // Fast confidence test that validates purchase flow end-to-end.
  it('completes checkout for one product', () => {
    const authActions = new AuthActions();
    const checkoutActions = new CheckoutActions();

    authActions.loginAsStandardUser();
    checkoutActions.completeCheckout('sauce-labs-backpack');
  });
});
