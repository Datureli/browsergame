describe('template spec', () => {
  it('sprawdź, czy nickname jest taki sam, jak ten wpisany w komponencie Home', () => {
    cy.visit({
      url: 'http://localhost:3000/',
      method: 'GET',
    })
    const typedNickname = "przykładowyNickname";
    cy.get("input[type='text']").should('be.visible').click({ force: true }).type(typedNickname);
    cy.get("button").contains("Continue").click();
  })
})