describe("test report section", () => {
  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/reports-iframe.html");
  });

  it("Check if i can download txt file", () => {
    cy.get("iframe").then((iframe) => {
      cy.wrap(iframe.contents()).within(() => {
        cy.get("#btn_dl_txt").click();
        cy.intercept("GET", "**/proposed_file_name.txt").as("download");
        cy.readFile('C:/Users/48578/Downloads/proposed_file_name.txt');
      });
    });
  });
});
