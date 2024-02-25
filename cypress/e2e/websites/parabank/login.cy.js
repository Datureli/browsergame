describe("test bank login", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("test if i can login with inccorect credential", () => {
    cy.get('#loginPanel input[type="text"]').type("dasdsa");
    cy.get('#loginPanel input[type="password"]').type("password1");
  });
});
