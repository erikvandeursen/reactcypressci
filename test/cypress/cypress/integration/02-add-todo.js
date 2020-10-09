import { url, selector } from '../config/Config.json';

describe('Add a new todo item', () => {
  it('Opens the todolist', () => {
    cy.visit(url.home);
  });

  it('Type a new title', () => {
    cy.get(selector.input)
      .type('Test todo');
  })

  it('Enter todo item', () => {
    cy.get(selector.button)
      .click();
  });

  it('New item should be visible', () => {
    cy.get(selector.item)
      .last()
      .should('be.visible');
  });
});