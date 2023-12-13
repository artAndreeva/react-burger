describe('open ingredient modal', () => {

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

  it('should open and close ingredient modal', () => {
    cy.get('[data-testid=ingredient]').contains('Краторная булка N-200i').click();
    cy.get('[data-testid=ingredient-modal]').contains('Краторная булка N-200i').should('exist');
    cy.get('[data-testid=close-modal]').click();
  });

});
