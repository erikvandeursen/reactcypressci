describe('Marks a todo item as done', () => {
  it('Opens the todolist', () => {
    cy.visit("/");
  });

  it('Gets and marks the last created todo item', () => {
    cy.get('.check')
      .last()
      .click()
  });

  it('Verify item is marked as done', () => {
    cy.get('.done')
      .first()
      .should('have.class', 'done');
  });
});