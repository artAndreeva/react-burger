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
    cy.get('[data-testid=ingredient]').as('ingredient');
    cy.get('[data-testid=constructor]').as('constructor');
    cy.get('@ingredient').contains('Краторная булка N-200i').trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@ingredient').contains('Соус фирменный Space Sauce').trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@ingredient').contains('Говяжий метеорит (отбивная)').trigger('dragstart');
    cy.get('@constructor').trigger('drop');
  });

});
