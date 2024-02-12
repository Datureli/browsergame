describe("test report section", () => {
  let iframe;

  beforeEach(() => {
    cy.visit("https://demobank.jaktestowac.pl/reports-iframe.html");
    cy.get("iframe").then((frame) => {
      iframe = frame.contents();
    });
  });

  const downloadFileTest = (buttonId, fileExtension) => {
    cy.wrap(iframe).within(() => {
      cy.get(buttonId).click();
      cy.readFile(`C:/Users/48578/Downloads/proposed_file_name.${fileExtension}`);
    });
  };

  it("Check if i can download txt file", () => {
    downloadFileTest("#btn_dl_txt", "txt");
  });

  it("Check if i can download zip file", () => {
    downloadFileTest("#btn_dl_zip", "zip");
  });
});
