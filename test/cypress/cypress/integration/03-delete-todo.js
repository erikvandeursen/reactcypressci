describe('Delete a todo item', () => {
  it('Opens the todolist', () => {
    cy.visit("/");
  });

  it('Gets and deletes the first created todo item', () => {
    cy.get('.cross')
      .first()
      .click()
  });
});