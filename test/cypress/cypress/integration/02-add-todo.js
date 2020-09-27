describe('Add a new todo item', () => {
  it('Opens the todolist', () => {
    cy.visit("/");
  });

  it('Type a new title', () => {
    cy.get('input')
      .type('Test todo');
  })

  it('Enter todo item', () => {
    cy.get('button').click();
  });

  it('New item should be visible', () => {
    cy.get('.todo')
      .last()
      .should('be.visible');
  });
});