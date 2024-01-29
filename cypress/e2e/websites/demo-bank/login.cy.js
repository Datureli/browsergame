describe("test login", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/logowanie_etap_2.html");
  });

  it("Check if error occurs on empty inputs", () => {
    cy.get("#login_id").type(" ");
    cy.get("#login_password").type(" ").blur();

    cy.get("#error_login_id")
      .should("be.visible")
      .invoke("text")
      .should("include", "pole wymagane");

    cy.get("#error_login_password")
      .should("be.visible")
      .invoke("text")
      .should("include", "pole wymagane");
  });

  it("login with incorrect credentials", () => {
    cy.get("#login_id").type("Niemis");
    cy.get("#login_password").type("NieMisio11");

    cy.get("#error_login_id").should("be.visible");
  });

  it("Check value of login error", () => {
    cy.get("#login_id").type("Niemis");
    cy.get("#login_password").type("NieMisio11");

    cy.get("#error_login_id")
      .should("be.visible")
      .invoke("text")
      .should("include", "identyfikator ma min. 8 znaków");
  });

  it("login with correct credentials", () => {
    cy.get("#login_id").type("Misio111");
    cy.get("#login_password").type("Misio222");

    cy.get("#login_next").click();
    cy.url().should("include", "/pulpit.html");
  });

  it("Check if the button is disabled if it is below 8 characters", () => {
    cy.get("#login_id").type("less2");
    cy.get("#login_password").type("less3");

    cy.get("#login_next").should("have.attr", "disabled");
  });

  it("Check whether the disables attribute disappears if there are more than 8 characters", () => {
    cy.get("#login_id").type("Misio111");
    cy.get("#login_password").type("Misio222");

    cy.get("#login_next").should("not.have.attr", "disabled");
  });
});

// Misio111 Misio222
