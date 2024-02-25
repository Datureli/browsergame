describe("register new account", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("create new account", () => {
    cy.get("#loginPanel a:contains('Register')").click();

    cy.get('[name="customer.firstName"]').type("Pawel");
    cy.get('[name="customer.lastName"]').type("Niewiadomski");
    cy.get('[name="customer.address.street"]').type("Juniorów 4");
    cy.get('[name="customer.address.city"]').type("Nibylandia");
    cy.get('[name="customer.address.state"]').type("taki jak w reakcie");
    cy.get('[name="customer.address.zipCode"]').type("211");
    cy.get('[name="customer.phoneNumber"]').type("07000881");
    cy.get('[name="customer.ssn"]').type("pypypy");
    cy.get('[name="customer.username"]').type("Datureli11");
    cy.get('[name="customer.password"]').type("Pawel123");
    cy.get('[name="repeatedPassword"]').type("Pawel123");

    cy.get('input[type="submit"][value="Register"]').click();

    cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');

  });
});
