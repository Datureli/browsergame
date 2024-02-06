describe("test session time after succesfull log in", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/pulpit.html");
  });

  it("Check if counter is equal to 10 minutes", () => {
    cy.get("#session_time").should("be.visible");
    cy.get("#countdown_minutes").invoke("text").should("eq", "10");
  });

  it("Check if the counter will count down 10 seconds from the initial value", () => {
    cy.get("#session_time").should("be.visible");

    const secondsToCheck = 10;

    for (let i = 0; i < secondsToCheck; i++) {
      cy.wait(1000);

      cy.get("#countdown_seconds")
        .invoke("text")
        .then((currentValue) => {
          const expectedValue = 59 - i;
          expect(currentValue).to.eq(expectedValue.toString());
        });
    }
  });

  it("Check if the counter resets after refreshing", () => {
    cy.wait(5000);

    cy.get("#countdown_minutes").invoke("text").as("initialMinutes");
    cy.get("#countdown_seconds").invoke("text").as("initialSeconds");

    cy.reload();

    cy.get("#countdown_minutes").should("have.text", "10");
    cy.get("#countdown_seconds").should("have.text", "00");

    cy.get("@initialMinutes").then((initialMinutes) => {
      cy.get("#countdown_minutes").invoke("text").should("eq", initialMinutes);
    });

    cy.get("@initialSeconds").then((initialSeconds) => {
      cy.get("#countdown_seconds").invoke("text").should("eq", initialSeconds);
    });
  });

  it("Check if you will be logged out after 10 minutes", () => {
    cy.clock();
    cy.tick(600000);

    cy.url().should("eq", "https://demobank.jaktestowac.pl/logowanie_etap_1.html");
  })
});
