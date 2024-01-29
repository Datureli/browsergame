describe("Test strony logowania", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://facebook.com");

    cy.get('.selected[data-cookiebanner="accept_button"]')
      .should("be.visible")
      .click();
  });

  it("try logging in with false credentials", () => {
    cy.get("#email").type("usernam20");
    cy.get("#passContainer").type("password12");
    cy.get('[data-testid="royal_login_button"]').click();
  });

  it("Password value is hidden", () => {
    cy.get('[data-testid="royal_pass"]').type("TwojeHasło");
    cy.get("#pass").should("have.attr", "type", "password");
  })

  it("Password should be visible after click on hide-password icon", () => {
    cy.get('[data-testid="royal_pass"]').type("TwojeHasło");
    cy.get('div._9lsb._9ls9#u_0_4_AS').click({ force: true });

    cy.get("#pass").should("have.attr", "type", "text");
  });

  it("check sign up button", () => {
    cy.get('[data-testid="open-registration-form-button"]').click();
  });
});
