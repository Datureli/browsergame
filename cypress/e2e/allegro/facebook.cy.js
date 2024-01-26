describe("Test strony MMA.pl", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://facebook.com");

    cy.get('.selected[data-cookiebanner="accept_button"]').should("be.visible").click();
  });

  it("Przescrolluj na dół formularza i kliknij w przycisk", () => {
    cy.get('.selected[data-cookiebanner="accept_button"]').click();
  });

  it("try logging in", () => {
    cy.get("#email").type("username20");
  })
});
