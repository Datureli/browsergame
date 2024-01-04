import ChooseCharacter from "./ChooseCharacter.vue";

describe("<ChooseCharacter />", () => {
  beforeEach(() => {
    cy.mount(ChooseCharacter);
  });

  it("Choose character has been rendered", () => {
    // Sprawdzamy, czy komponent "ChooseCharacter" został poprawnie wyrenderowany
    cy.get(".characterContainer").should("exist");
    cy.get(".characterName").should("exist");
    cy.get(".continueButton").should("exist");
  });

  it("check if image exist", () => {
    // Wybieramy wszystkie elementy z klasą "my-card", które są kartami postaci
    cy.get(".my-card").each(($card, index) => {
      // Sprawdzamy, czy istnieje element img wewnątrz każdej karty
      cy.wrap($card).find("img").should("exist");
    });
  });

  it("hover on a character card and check if it scales", () => {
    cy.get(".my-card").each(($card, index) => {
      // Najedź kursorem na kartę i sprawdź, czy ma klasę "cardBorder"
      cy.wrap($card)
        .trigger("mouseover")
        .should("have.class", "cardBorder")
        .trigger("mouseout");
    });
  });
});
