import { url, selector } from '../config/Config.json';

describe('Open todo list', () => {
  it('Opens the todo list', () => {
    cy.visit(url.home);
  });

  it('Page contains a title', () => {
    cy.get(selector.title)
      .should('be.visible');
  });

  it('Page contains a input field', () => {
    cy.get(selector.input)
      .should('be.visible');
  });

  it('Page contains 4 bootstrapped items', () => {
    cy.get(selector.header)
      .children()
      .should('have.length', 4);
  });
});