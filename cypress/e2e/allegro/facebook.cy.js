describe("Test strony MMA.pl", () => {
  before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://facebook.com");
  });

  it("Przescrolluj na dół formularza i kliknij w przycisk", () => {
    cy.get('.selected[data-cookiebanner="accept_button"]').click();
  });
});
