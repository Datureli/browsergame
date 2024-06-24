## Przypadki testowe dla integracji pomiędzy komponentami Home i ChooseCharacter
# Przypadek testowy 1: Weryfikacja wpisania i wyświetlenia pseudonimu

**Cel:**  
Upewnij się, że pseudonim wpisany w komponencie Home jest poprawnie wyświetlany w komponencie ChooseCharacter.

**Założenia:**
- Strona główna jest dostępna pod adresem `http://localhost:3000/`.
- Komponent `Home` zawiera pole tekstowe do wpisania pseudonimu.
- Komponent `Home` zawiera przycisk "Continue", który przekierowuje do komponentu `ChooseCharacter`.
- Komponent `ChooseCharacter` wyświetla wpisany pseudonim w elemencie `<h2>`.

**Kroki testowe:**

1. **Odwiedzenie strony głównej:**
   - **Akcja:** Otwórz przeglądarkę i przejdź do adresu `http://localhost:3000/`.
   - **Oczekiwany rezultat:** Strona główna ładuje się poprawnie, a komponent `Home` jest wyświetlany.

2. **Wpisanie pseudonimu:**
   - **Akcja:** W polu tekstowym wpisz pseudonim np. "przykładowyNickname".
   - **Oczekiwany rezultat:** Wpisany pseudonim jest widoczny w polu tekstowym.

3. **Przejście do komponentu ChooseCharacter:**
   - **Akcja:** Kliknij przycisk "Continue".
   - **Oczekiwany rezultat:** Strona przekierowuje do adresu `http://localhost:3000/character`.

4. **Weryfikacja URL:**
   - **Akcja:** Sprawdź, czy adres URL zawiera `http://localhost:3000/character`.
   - **Oczekiwany rezultat:** Adres URL zawiera `http://localhost:3000/character`, co wskazuje na prawidłowe przekierowanie.

5. **Weryfikacja wyświetlenia pseudonimu:**
   - **Akcja:** Sprawdź, czy element `<h2>` na stronie `character` zawiera tekst `Choose your Character "przykładowyNickname"`.
   - **Oczekiwany rezultat:** Element `<h2>` wyświetla tekst `Choose your Character "przykładowyNickname"`.

**Szczegóły implementacji testu**

```typescript
  it("Weryfikacja wpisania i wyświetlenia pseudonimu", () => {
    // Odwiedzenie strony głównej
    cy.visit({
      url: "http://localhost:3000/",
      method: "GET",
    });

    // Wpisanie pseudonimu
    const typedNickname = "przykładowyNickname";
    cy.get("input[type='text']").click({ force: true }).type(typedNickname);

    // Przejście do komponentu ChooseCharacter
    cy.get("button").contains("Continue").click();

    // Weryfikacja URL
    cy.url().should("include", "http://localhost:3000/character");

    // Weryfikacja wyświetlenia pseudonimu
    cy.get('h2').should('contain', `Choose your Character "${typedNickname}"`);
  });
