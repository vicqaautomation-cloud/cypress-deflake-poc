class Toast {
  assertMessage(text: string): void {
    cy.contains(text).should('be.visible');
  }
}

export default Toast;
