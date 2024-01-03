import ChooseCharacter from './ChooseCharacter.vue';

describe('<ChooseCharacter />', () => {
  beforeEach(() => {
    cy.mount(ChooseCharacter);
  });

  it('Choose character has been rendered', () => {
    // Sprawdzamy, czy komponent "ChooseCharacter" został poprawnie wyrenderowany
    cy.get('.characterContainer').should('exist');
    cy.get('.characterName').should('exist');
    cy.get('.continueButton').should('exist');
  });

  it('check if image exist', () => {
    // Wybieramy wszystkie elementy z klasą "my-card", które są kartami postaci
    cy.get('.my-card').each(($card, index) => {
      // Sprawdzamy, czy istnieje element img wewnątrz każdej karty
      cy.wrap($card).find('img').should('exist');
    });
  });

  it('select a character card and check if it scales', () => {
    // Wybieramy drugą kartę postaci (lub inną, którą chcesz przetestować) i klikamy na nią
    cy.get('.my-card').eq(1).click();

    // Sprawdzamy, czy wybrana karta ma klasę "cardBorder" po kliknięciu
    cy.get('.my-card').eq(1).should('have.class', 'cardBorder');

    // Oczekujemy, że obrazek w wybranej karcie zostanie zwielokrotniony po kliknięciu
    cy.get('.my-card').should('have.attr', 'style').should('contain', 'transform: scale(1.1)')
  });
});
