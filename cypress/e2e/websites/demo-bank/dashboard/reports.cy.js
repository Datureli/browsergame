describe("test report section", () => {
    beforeEach(() => {
        cy.visit("https://demobank.jaktestowac.pl/reports-iframe.html");
    })

    it("Check if i can download txt file", () => {
        cy.get("#btn_dl_txt").click();
    })
})