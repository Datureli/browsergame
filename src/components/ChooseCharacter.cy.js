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

  it('hover on a character card and check if it scales', () => {
    // Najedź kursorem na każdą kartę i sprawdź, czy zostaje powiększona
    cy.get('.my-card').each(($card, index) => {
      // Najedź kursorem na kartę
      cy.wrap($card).trigger('mouseover');
  
      // Oczekujemy, że karta ma klasę "cardBorder" po najechaniu
      cy.wrap($card).should('have.class', 'cardBorder');
  
      // Oczekujemy, że obrazek w karcie zostanie zwielokrotniony po najechaniu
      cy.wrap($card).should('have.attr', 'style').and('contain', 'transform: scale(1.1)');
  
      // Zaczekaj na opuszczenie karty przed przejściem do następnej iteracji
      cy.wrap($card).trigger('mouseout');
    });
  });
  
  
});
