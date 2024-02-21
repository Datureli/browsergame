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
      cy.readFile(
        `C:/Users/48578/Downloads/proposed_file_name.${fileExtension}`
      );
    });
  };

  const uploadFileTest = (buttonId, filePath) => {
    cy.wrap(iframe).within(() => {
      cy.get(buttonId).attachFile(filePath);
    });
  };

  it("Check if i can download txt file", () => {
    downloadFileTest("#btn_dl_txt", "txt");
  });

  it("Check if i can download zip file", () => {
    downloadFileTest("#btn_dl_zip", "zip");
  });

  it("Check if i can send a txt file to browser", () => {
    cy.wrap(iframe).within(() => {
      cy.get("#my_file_1").click({ force: true }).attachFile("test.txt");
      cy.get("span.filename").should("contain.text", "test.txt");
    });
  });

  it("Check if i can send a json file to browser", () => {
    cy.wrap(iframe).within(() => {
      cy.get("#my_file_2").click({ force: true }).attachFile("example.json");
      cy.get("span.filename").should("contain.text", "example.json");
    });
  });
});
