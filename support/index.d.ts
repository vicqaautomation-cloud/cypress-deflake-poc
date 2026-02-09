declare global {
  namespace Cypress {
    interface Chainable {
      uiLogin(): Chainable<void>;
      apiLogin(): Chainable<string>;
      safeClick(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
