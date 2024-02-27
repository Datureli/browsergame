---
id: #QUE001
title: Zarejestruj nowego użytkownika
description: Próba zarejestrowania nowego użytkownika przy użyciu różnych scenariuszy
test Scenario: Użytkownik został zarejestrowany poprawnie
Test Steps:
  - Sprawdź czy działa link przekierowujacy do rejestracji
  - Sprawdź czy jesteś w stanie wypełnić wszystkie pola
  - Sprawdź czy wszystkie pola działają poprawnie
  - Sprawdź czy przccisk akceptujący formularz działa poprawnie
  - Sprawdź co się dzieje gdy wypełniona jest tylko część pól
  - Sprawdź czy podczas pozostawienia pustych pół pojawiają się odpowiednie komunikaty
  - Sprawdź czy można zarejestrować użytkownika dwukrotnie

Prerequisites: Użytkownik został poprawnie zarejestrowany
Expected/Intended Results: Można utworzyć konto użytkownika, nie można utworzyć konta na już wcześniej zarejestrowane dane logowania.
---

## Sprawdź czy działa link przekierowujacy do rejestracji
Warunek wstępny: Wyświetla się link z wartością "register"
Kroki testowe:
- Wchodzimy na stronę główną aplikacji
- Klikamy przycisk "register"

Oczekiwany rezultat: Użytkownik zostaje przekierowany do formularza rejestracyjnego

## Sprawdź czy jesteś w stanie wypełnić wszystkie pola

