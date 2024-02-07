describe("test user desktop", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/pulpit.html");
  });

  it("quick payments data", () => {
    cy.get("#widget_1_transfer_receiver").select(1);
    cy.get("#widget_1_transfer_amount").clear().type(11.20);
    cy.get("#widget_1_transfer_title").type("Przelew za książki");

    cy.get("#execute_btn").click();

    cy.get("#show_messages").should("be.visible").should('have.text', 'Przelew wykonany! Jan Demobankowy - 11,20PLN - zasileniePrzelew za książki');
  });

  it("fill title data with empty spaces", () => {
    cy.get("#widget_1_transfer_receiver").select(1);
    cy.get("#widget_1_transfer_title").type(" ");

    cy.get("#error_widget_1_transfer_title").should('have.text', 'Pole wymagane');
    // false, quick payment accept empty title
  })

  it("Test maximum value of transfer", () => {
    cy.get("#widget_1_transfer_amount").type(99999999999);
    cy.get("#widget_1_transfer_title").type("dsadas");

    cy.get("#error_widget_1_transfer_amount").should('have.text', 'kwota musi być mniejsza od 1000000');
  })

  it("send quick payment with value of 0$", () => {
    cy.get("#widget_1_transfer_receiver").select(1);
    cy.get("#widget_1_transfer_amount").clear().type(0);
    cy.get("#widget_1_transfer_title").type("Przelew");

    cy.get("#execute_btn").click();
    cy.get("#show_messages").should("not.be.visible");
    // false - user can send payment with value 0
  })

  it("send quick payment with ,, instad of value", () => {
    cy.get("#widget_1_transfer_receiver").select(1);
    cy.get("#widget_1_transfer_amount").clear().type(",,,,");
    cy.get("#widget_1_transfer_title").type("Przelew");

    cy.get("#execute_btn").click();
    cy.get("#show_messages").should("not.be.visible");
  })
});
