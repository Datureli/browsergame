describe("Test strony MMA.pl", () => {
  it("Wejdź na stronę", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://mma.pl/");

    cy.contains("Zgadzam się").click();
  });
});
