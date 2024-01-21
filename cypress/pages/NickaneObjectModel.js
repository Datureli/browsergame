class HomePage {
    clickRandomNameButton() {
      cy.get("button:contains('losowe')").click();
    }
  
    inputField() {
      return cy.get("input");
    }
  
    continueButton() {
      return cy.get("button:contains('Continue')");
    }
  
    getNicknameInput() {
      return cy.get("#nicknameInput");
    }
  
    checkIfRandomNameGenerated() {
      this.clickRandomNameButton();
      this.inputField().should("not.have.value", "");
    }
  
    checkIfEmptySpacesOrTabsNotAllowed() {
      this.inputField().type("   ").should("not.have.value", "");
    }
  
    checkIfContinueButtonHasActiveLinkClass() {
      this.getNicknameInput().type("pięćLiter");
      this.continueButton().should('have.class', 'activeStatus');
  
      this.getNicknameInput().clear();
      this.continueButton().should('not.have.class', 'activeStatus');
    }
  
    checkIfInputDoesNotContainSpecialCharacters() {
      this.inputField().type('??--////``++--');
      this.inputField().invoke('val').should('match', /^[a-zA-Z0-9]*$/);
    }
  }
  
  export default new HomePage();
  