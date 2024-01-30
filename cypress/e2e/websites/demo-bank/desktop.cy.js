describe("test user desktop", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/pulpit.html");
  });

  it("check fast transfer", () => {
    cy.get("#widget_1_transfer_receiver").select(1);
    cy.get("#widget_1_transfer_amount").type(11.20);
    cy.get("#widget_1_transfer_title").type("Przelew za książki");

    cy.get("#execute_btn").click();

  });
});
