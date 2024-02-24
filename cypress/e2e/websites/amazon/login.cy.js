describe("Check login elements", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.pl/ref=nav_logo");
    cy.get("#sp-cc-accept").click();
  });

  it("Check if login box appear if i hover over", () => {
    cy.get("#nav-link-accountList").trigger('mouseover');
    cy.get("#nav-flyout-accountList").should("be.visible");
  })

  it("Check if login button redirect me to login page", () => {
    cy.get("#nav-link-accountList").trigger('mouseover');
    cy.get("#nav-flyout-ya-signin").should("be.visible");
    cy.get("#nav-flyout-ya-signin").click();

    cy.url().should("eq", "https://www.amazon.pl/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.pl%2Fref%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=plflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
  })
});
