describe("check box elements", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.pl/gp/cart/view.html?ref_=nav_top_cart");
    cy.get("#sp-cc-accept").click();
  });

  it("check if i can mark checkbox", () => {});
});
