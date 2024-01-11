class nicknamePage {
    get nicknameField() {
        return cy.get("#nicknameInput")
    }

    get submitNickname() {
        return cy.get("")
    }

    fillNickname(nickname) {
        this.nicknameField.type(nickname)
    }
}
export default nicknamePage;