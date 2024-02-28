describe("test bank login", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("test if i can login with inccorect credentials", () => {
    cy.get('#loginPanel input[type="text"]').type("dasdsa");
    cy.get('#loginPanel input[type="password"]').type("password1");

    cy.get('input[type="submit"]').click();

    cy.get(".error")
      .should("be.visible")
      .contains("An internal error has occurred and has been logged.");
  });

  it("Login with correct credentials", () => {
    cy.get('#loginPanel input[type="text"]').type("Datureli11");
    cy.get('#loginPanel input[type="password"]').type("Pawel123");

    cy.get('input[type="submit"]').click();

    cy.get(".smallText")
      .should("be.visible")
      .invoke("text")
      .should("include", "Welcome John Smith");
  });
});
