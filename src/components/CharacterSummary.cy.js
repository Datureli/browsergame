import CharacterSummary from './CharacterSummary.vue'

describe('<CharacterSummary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CharacterSummary)
  })
})