import Home from "../views/Home.vue";

describe("Home page", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    cy.get("button:contains('losowe')").click();

    cy.get("input").should("not.have.value", "");
  });
// cypress klika w przycisk za pomocą click zanim vue dostarcza event @click
  it("Check if continue button redirects us to /character router link", () => {
    const inputValue = "ExampleText";
    cy.get("input").type(inputValue);

    cy.get("input").should("have.value", inputValue);

    cy.get("button:contains('Continue')").trigger('mouseover').click()

    cy.url().should("include", "/character");
  });

  it("Check if u can pass to character choose with empty spaces or tabs",() => {
    cy.get("input")
    .type("   ")
    .should("not.have.value", "");
  })
});
