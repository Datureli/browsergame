describe("Test telephone charge", () => {
    beforeEach(() => {
        cy.visit("https://demobank.jaktestowac.pl/pulpit.html");
    });

    it("Fill input with correct credentials", () => {
        cy.get("#widget_1_topup_receiver").select(1);
        cy.get("#widget_1_topup_amount").clear().type(150);
        cy.get("#uniform-widget_1_topup_agreement").click();
        cy.get("#execute_phone_btn").click();

        cy.get("#show_messages").should("be.visible").should('have.text', 'Doładowanie wykonane! 150,00PLN na numer 500 xxx xxx');
    })

    it("Try charge telephone without check terms", () => {
        cy.get("#widget_1_topup_receiver").select(1);
        cy.get("#widget_1_topup_amount").clear().type(150);
        cy.get("#execute_phone_btn").click();

        cy.get("#error_widget_1_topup_agreement").should("be.visible").should('have.text', 'pole wymagane');
    })
})