class Modal {
  assertVisible(text: string): void {
    cy.contains(text).should('be.visible');
  }
}

export default Modal;
