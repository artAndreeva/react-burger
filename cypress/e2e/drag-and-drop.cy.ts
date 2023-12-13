describe('open order modal', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as('getUser');

    window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'));
    cy.setCookie('accessToken', 'test-accessToken')
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('should drag bun', () => {
    cy.wait('@getIngredients');
    cy.wait('@getUser');
    cy.get('[data-testid=ingredient]').contains('Краторная булка N-200i').trigger('dragstart');
    cy.get('[data-testid=constructor]').trigger('drop');
    cy.get('[data-testid=ingredient]').contains('Соус фирменный Space Sauce').trigger('dragstart');
    cy.get('[data-testid=constructor]').trigger('drop');
    cy.get('[data-testid=ingredient]').contains('Говяжий метеорит (отбивная)').trigger('dragstart');
    cy.get('[data-testid=constructor]').trigger('drop');
  });

});
