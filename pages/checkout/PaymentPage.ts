import BasePage from '../base/BasePage';

// Selectors used for checkout steps two and three.
const PaymentSelectors = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  completeHeader: '[data-test="complete-header"]',
};

interface CheckoutUser {
  firstName: string;
  lastName: string;
  postalCode: string;
}

class PaymentPage extends BasePage {
  // Fills buyer information and continues to order overview.
  fillCheckoutForm(user: CheckoutUser): void {
    this.type(PaymentSelectors.firstName, user.firstName);
    this.type(PaymentSelectors.lastName, user.lastName);
    this.type(PaymentSelectors.postalCode, user.postalCode);
    this.click(PaymentSelectors.continueButton);
  }

  // Confirms purchase in the final checkout step.
  finishCheckout(): void {
    this.click(PaymentSelectors.finishButton);
  }

  // Validates the expected completion message.
  assertOrderCompleted(): void {
    this.contains(PaymentSelectors.completeHeader, 'Thank you for your order!');
  }
}

export type { CheckoutUser };
export { PaymentSelectors };
export default PaymentPage;
