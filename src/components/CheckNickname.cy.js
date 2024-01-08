import Home from "../views/Home.vue";

describe("Home page", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    cy.get("button:contains('losowe')").click();

    cy.get("input").should("not.have.value", "");
  });

  it("Check if continue button redirects us to /character router link", () => {
    const inputValue = "ExampleText";
    cy.get("input").type(inputValue);

    cy.get("input").should("have.value", inputValue);

    cy.get("button:contains('Continue')").click();

    // Oczekuj na zmianę URL na inną lokalizację
    cy.url().should("include", "http://localhost:3001/character");
  });

  it("Check if u can pass to character choose with empty spaces or tabs",() => {

  })
});
