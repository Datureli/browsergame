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
});
