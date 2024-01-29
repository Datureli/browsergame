describe("test login", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/logowanie_etap_2.html");
  });

  it("login with correct credentials", () => {
    cy.get("#login_id").type("Misio111");
    cy.get("#login_password").type("Misio222");

    cy.get("#login_next").click();
  });

  it("login with incorrect credentials", () => {
    cy.get("#login_id").type("Niemis");
    cy.get("#login_password").type("NieMisio11");

    cy.get("#error_login_id").should("be.visible");
  });
});

// Misio111 Misio222
