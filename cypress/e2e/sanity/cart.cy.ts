import AuthActions from '../../../actions/auth.actions';
import CartPage from '../../../pages/checkout/CartPage';

describe('Sanity - Cart', () => {
  it('adds two items and removes one from cart', () => {
    const authActions = new AuthActions();
    const cartPage = new CartPage();

    authActions.loginAsStandardUser();
    cartPage.addProductToCart('sauce-labs-backpack');
    cartPage.addProductToCart('sauce-labs-bike-light');
    cartPage.assertItemsInCart(2);

    cartPage.removeProductFromCart('sauce-labs-bike-light');
    cartPage.assertItemsInCart(1);

    cartPage.openCart();
    cartPage.assertCartLineItems(1);
  });
});
