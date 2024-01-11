import Home from "../views/Home.vue";

describe("Home page", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    cy.get("button:contains('losowe')").click();

    cy.get("input").should("not.have.value", "");
  });

  it("Check if u can pass to character choose with empty spaces or tabs",() => {
    cy.get("input")
    .type("   ")
    .should("not.have.value", "");
  })

  it('Powinien sprawdzić, czy input nie zawiera znaków specjalnych', () => {
    cy.get('input').type('??--////``++--');

    cy.get("input").invoke('val').should('match', /^[a-zA-Z0-9]*$/);
  });
});
