class Header {
  private readonly selectors = {
    cartLink: '[data-test="shopping-cart-link"]',
    menuButton: '#react-burger-menu-btn',
    logoutLink: '[data-test="logout-sidebar-link"]',
  };

  openCart(): void {
    cy.get(this.selectors.cartLink).click();
  }

  logout(): void {
    cy.get(this.selectors.menuButton).click();
    cy.get(this.selectors.logoutLink).click();
  }
}

export default Header;
