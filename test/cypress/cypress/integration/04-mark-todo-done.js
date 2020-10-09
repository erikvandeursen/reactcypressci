import { url, selector } from '../config/Config.json';

describe('Marks a todo item as done', () => {
  it('Opens the todolist', () => {
    cy.visit(url.home);
  });

  it('Gets and marks the last created todo item', () => {
    cy.get(selector.check)
      .last()
      .click()
  });

  it('Verify item is marked as done', () => {
    cy.get(selector.done)
      .first()
      .should('have.class', 'done');
  });
});