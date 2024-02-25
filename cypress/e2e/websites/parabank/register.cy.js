describe("register new account", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("create new account", () => {
    cy.get("#loginPanel a:contains('Register')").click();

    cy.get('[name="customer.firstName"]').type("Pawel");
    cy.get('[name="customer.lastName"]').type("Pawel");
    cy.get('[name="customer.address.street"]').type("Pawel");
    cy.get('[name="customer.address.city"]').type("Pawel");
    cy.get('[name="customer.address.state"]').type("Pawel");
    cy.get('[name="customer.address.zipCode"]').type("Pawel");
    cy.get('[name="customer.phoneNumber"]').type("Pawel");
    cy.get('[name="customer.ssn"]').type("Pawel");
    cy.get('[name="customer.username"]').type("Pawel");
    cy.get('[name="customer.password"]').type("Pawel");
    cy.get('[name="repeatedPassword"]').type("Pawel");
  });
});
