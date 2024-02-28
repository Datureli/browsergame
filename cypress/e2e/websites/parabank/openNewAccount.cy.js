describe("Opening new bank account", () => {
    beforeEach(() => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm");
      cy.get('#loginPanel input[type="text"]').type("aaa");
      cy.get('#loginPanel input[type="password"]').type("aaa");
  
      cy.get('input[type="submit"]').click();
      cy.get('a[href="/parabank/openaccount.htm"]').should("be.visible").click();
    });
  
    it("Open checking accounts", () => {
      cy.get("#type").select("CHECKING");
  
      cy.get('input[type="submit"][value="Open New Account"]').click();
      cy.wait(2000);
      
      cy.get(".title").should("be.visible").then(($title) => {
        expect($title.text()).to.include("Account Opened!");
      });
  
      cy.get("p").should("be.visible").contains("Congratulations, your account is now open.");
    });
  });
  