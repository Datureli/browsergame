import Home from "../src/views/Home.vue";

describe("Strona główna", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    cy.get("button:contains('losowe')").click();

    cy.get("input").should("not.have.value", "");
  });

  it("Check if you can pass to character choose with empty spaces or tabs", () => {
    cy.get("input")
      .type("   ")
      .should("not.have.value", "");
  });

  it("Check if the 'Continue' button has the 'activeLink' class when the 'nickname' field is longer than 5 characters", () => {
    cy.get("#nicknameInput").type("pięćLiter");

    cy.get("button:contains('Continue')").should('have.class', 'activeStatus');

    cy.get("#nicknameInput").clear();
    cy.get("button:contains('Continue')").should('not.have.class', 'activeStatus');
  });

  it("Should check if the input does not contain special characters", () => {
    cy.get('input').type('??--////``++--');

    cy.get("input").invoke('val').should('match', /^[a-zA-Z0-9]*$/);
  });
});
