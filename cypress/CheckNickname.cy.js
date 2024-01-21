// home.spec.js
import homePage from "./pages/NickaneObjectModel";
import Home from "../src/views/Home.vue";

describe("Strona główna", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Sprawdź, czy losowa generacja nazwy działa", () => {
    homePage.checkIfRandomNameGenerated();
  });

  it("Sprawdź, czy można przejść do wyboru postaci z pustymi odstępami lub tabulatorami", () => {
    homePage.checkIfEmptySpacesOrTabsNotAllowed();
  });

  it("Sprawdź, czy przycisk 'Continue' ma klasę 'activeLink' po wprowadzeniu więcej niż 5 znaków w polu 'nickname'", () => {
    homePage.checkIfContinueButtonHasActiveLinkClass();
  });

  it("Sprawdź, czy pole nie zawiera znaków specjalnych", () => {
    homePage.checkIfInputDoesNotContainSpecialCharacters();
  });
});
