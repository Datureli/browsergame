describe("check box elements", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.pl/gp/cart/view.html?ref_=nav_top_cart");
    cy.get("#sp-cc-accept").click();
  });

  it("Check if a message appears when the counter has a value of 0", () => {
    cy.get("#nav-cart-count").should('have.text', '0');

    cy.get("h2:contains('Twój koszyk Amazon jest pusty')")
    .should("be.visible");
  });
});
