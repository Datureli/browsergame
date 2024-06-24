describe("Test integration between Home and ChooseCharacer component", () => {
  it("Check nickname visibility - nickname is the same as the one entered in the Home component", () => {
    cy.visit({
      url: "http://localhost:3000/",
      method: "GET",
    });

    const typedNickname = "przykładowyNickname";
    cy.get("input[type='text']").click({ force: true }).type(typedNickname);
    cy.get("button").contains("Continue").click();
    cy.url().should("include", "http://localhost:3000/character");

    cy.get('h2').should('contain', `Choose your Character "${typedNickname}"`);
  });
});
