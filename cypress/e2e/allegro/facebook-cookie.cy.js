describe("Test zapisu plików cookie", () => {
    before(() => {
      // Sprawdź, czy pliki cookie zostały zaakceptowane
      const cookieAccepted = localStorage.getItem("cookieAccepted");
  
      if (!cookieAccepted) {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit("https://facebook.com");
        cy.get('.selected[data-cookiebanner="accept_button"]')
          .should("be.visible")
          .click();
        // Zapisz informację o zaakceptowaniu plików cookie w localStorage
        localStorage.setItem("cookieAccepted", "true");
      }
    });
  
    it("Try refreshing the page", () => {
      // Ponownie sprawdź, czy pliki cookie zostały zaakceptowane po odświeżeniu
      cy.reload();
      cy.get('.selected[data-cookiebanner="accept_button"]').should(
        "not.be.visible"
      );
  
      // Poczekaj, aż przycisk akceptacji plików cookie stanie się niewidoczny
      cy.get('.selected[data-cookiebanner="accept_button"]').should(
        "not.be.visible"
      );
    });
  
    it("Check if cookie is accepted", () => {
      // Sprawdź, czy pliki cookie zostały zaakceptowane
      expect(localStorage.getItem("cookieAccepted")).to.equal("true");
    });
  });
  