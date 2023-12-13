describe('open order modal', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as('getUser');
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as('postOrder');

    window.localStorage.setItem('refreshToken', JSON.stringify('test-refreshToken'));
    cy.setCookie('accessToken', 'test-accessToken')
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('should open and close order modal', () => {
    cy.wait('@getIngredients');
    cy.wait('@getUser');
    cy.get('[data-testid=ingredient]').contains('Краторная булка N-200i').trigger('dragstart');
    cy.get('[data-testid=constructor]').trigger('drop');
    cy.get('[data-testid=ingredient]').contains('Соус фирменный Space Sauce').trigger('dragstart');
    cy.get('[data-testid=constructor]').trigger('drop');
    cy.get('[data-testid=order-button]').click();
    cy.wait('@postOrder');
    cy.get('[data-testid=order-modal]').contains('123').should('exist');
    cy.get('[data-testid=close-modal]').click();
  });

});
