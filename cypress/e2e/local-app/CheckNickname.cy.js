import NicknameObjectModel from "../../pages/NickaneObjectModel";
import Home from "../../../src/views/Home.vue";


describe("Nickname tests", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("Check if random name generation is working", () => {
    NicknameObjectModel.checkIfRandomNameGenerated();
  });

  it("Check if placeholder is not empty", () => {
    NicknameObjectModel.checkIfPlaceholderIsNotEmpty();
  })

  it("Check if placeholder value is equal to nickname", () => {
    NicknameObjectModel.checkIfPlacerholderHasCorrectName();
  })

  it("Check if you can pass to character choose with empty spaces or tabs", () => {
    NicknameObjectModel.checkIfEmptySpacesOrTabsNotAllowed();
  });

  it("Check if the 'Continue' button has the 'activeLink' class when the 'nickname' field is longer than 5 characters", () => {
    NicknameObjectModel.checkIfContinueButtonHasActiveLinkClass();
  });

  it("Should check if the input does not contain special characters", () => {
    NicknameObjectModel.checkIfInputDoesNotContainSpecialCharacters();
  });
});
