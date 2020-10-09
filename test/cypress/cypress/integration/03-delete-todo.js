import { url, selector } from '../config/Config.json';

describe('Delete a todo item', () => {
  it('Opens the todolist', () => {
    cy.visit(url.home);
  });

  it('Gets and deletes the first created todo item', () => {
    cy.get(selector.cross)
      .first()
      .click()
  });
});