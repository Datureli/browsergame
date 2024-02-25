describe("register new account", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  const generateRandomUsername = () => {
    const length = 7;
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  it("create new account", () => {
    const randomUserName = generateRandomUsername();
    cy.get("#loginPanel a:contains('Register')").click();

    cy.get('[name="customer.firstName"]').type("Pawel");
    cy.get('[name="customer.lastName"]').type("Niewiadomski");
    cy.get('[name="customer.address.street"]').type("Juniorów 4");
    cy.get('[name="customer.address.city"]').type("Nibylandia");
    cy.get('[name="customer.address.state"]').type("taki jak w reakcie");
    cy.get('[name="customer.address.zipCode"]').type("211");
    cy.get('[name="customer.phoneNumber"]').type("07000881");
    cy.get('[name="customer.ssn"]').type("pypypy");
    cy.get('[name="customer.username"]').type(randomUserName);
    cy.get('[name="customer.password"]').type("Pawel123");
    cy.get('[name="repeatedPassword"]').type("Pawel123");

    cy.get('input[type="submit"][value="Register"]').click();

    cy.get("p")
      .contains("Your account was created successfully. You are now logged in.")
      .should("be.visible");
  });

  it("Check if i can register user with existed username account", () => {
    cy.get("#loginPanel a:contains('Register')").click();
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

    cy.get("#customer.username.errors")
      .should("be.visible")
      .contains("This username already exists.");
  });
});
