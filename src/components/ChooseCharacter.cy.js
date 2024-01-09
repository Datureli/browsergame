import ChooseCharacter from "./ChooseCharacter.vue";
import Home from "../views/Home.vue"

describe("<ChooseCharacter />", () => {
  beforeEach(() => {
    cy.mount(ChooseCharacter);
  });

  it("Choose character has been rendered", () => {
    cy.get(".characterContainer, .characterName, .continueButton").should(
      "exist"
    );
  });

  it("check if image exist", () => {
    cy.get(".my-card").each(($card, index) => {
      // Sprawdzamy, czy istnieje element img wewnątrz każdej karty
      cy.wrap($card).find("img").should("exist");
    });
  });

  it("hover on a character card and check if it scales", () => {
    cy.get(".my-card").each(($card, index) => {
      cy.wrap($card)
        .trigger("mouseover")
        .should("have.class", "cardBorder")
        .trigger("mouseout");
    });
  });

  it("click on a character card and check if it scales", () => {
    cy.get(".my-card").each(($card, index) => {
      cy.wrap($card).click();

      cy.wrap($card).should("have.class", "cardBorder");
    });
  });

  it("sprawdź, czy nickname jest taki sam, jak ten wpisany w komponencie Home", () => {
    const typedNickname = "przykładowyNickname";
    cy.mount({
      template: `<Home />`,
      components: { Home },
    });

    // Wprowadź nickname na stronie Home
    cy.get("input[type='text']").should('be.visible').click({ force: true }).type(typedNickname);
    cy.get("button").contains("Continue").click();

    // Zamontuj komponent ChooseCharacter i przekazuj nickname jako prop
    cy.mount({
      template: `<ChooseCharacter :nickname="typedNickname" />`,
      components: { ChooseCharacter },
      data() {
        return {
          typedNickname,
        };
      },
    });

    // Sprawdź, czy nickname w ChooseCharacter jest zgodny z wpisanym w Home
    cy.get(".characterContainer h2").should("contain", typedNickname);
  });
});
