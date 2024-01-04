import Home from "../views/Home.vue";

describe("Home page", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    // Sprawdź, czy początkowo nie ma błędów
    cy.get(".error").should("not.exist");

    cy.get("button:contains('losowe')").click();

    // Poczekaj, aż pojawi się wartość w polu input
    cy.get("input").should("not.have.value", "");
  });


});
