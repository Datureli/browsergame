import { test, expect } from "@playwright/test";

test("check register user", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByLabel('First Name').fill("Paweł");
  await page.getByLabel('Last Name').fill("Testowski");
  await page.getByLabel('Email', { exact: true }).fill("soleris1@gmail.com");
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("Misio150");
  await page.getByLabel('Confirm Password').fill("Misio150");
  await page.getByRole('button', { name: 'Create an Account' }).click();
});

test("Sprawdź siłę hasła wyłącznie z małymi literami - słabe", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  // Poczekaj na pojawienie się linku "Create an Account" i kliknij
  await page.waitForSelector('text="Create an Account"', { timeout: 5000 });
  await page.click('text="Create an Account"');

  await page.fill('input[name="password"]', 'misio');

  // Poczekaj na pojawienie się rodzica elementu z tekstem "Password Strength:"
  const parentElement = await page.waitForSelector('#password-strength-meter');

  // Znajdź dziecko wewnątrz rodzica z identyfikatorem "password-strength-meter-label"
  const isChildVisible = await parentElement.evaluate((parent) => {
    const child = parent.querySelector('#password-strength-meter-label');
    return child ? window.getComputedStyle(child).getPropertyValue('display') !== 'none' : false;
  });

  // Sprawdź, czy element jest widoczny
  expect(isChildVisible).toBeTruthy();

  // Sprawdź, czy element zawiera tekst "Weak"
  const passwordStrengthText = await parentElement.evaluate((parent) => {
    const child = parent.querySelector('#password-strength-meter-label');
    return child ? child.textContent.trim() : '';
  });

  expect(passwordStrengthText).toBe('Weak');
});




test("Repeating a password with a different value", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("Misio150");
  await page.getByLabel('Confirm Password').fill("Misio151");

  await page.getByRole('button', { name: 'Create an Account' }).click();
  const expectedErrorText = 'Please enter the same value again.';
  const passwordConfirmationError =   await page.locator('#password-confirmation-error').textContent();
  expect(passwordConfirmationError).toBe(expectedErrorText);
});

test("Password below 8 characters did not pass", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("7length");
  await page.getByRole('button', { name: 'Create an Account' }).click();
  
  const passwordError = await page.locator("#password-error").textContent();
  const errorValue = "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
  expect(passwordError).toBe(errorValue);
});

test("test email field", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByLabel('Email', { exact: true }).fill("dsadasdsa");

  await page.getByRole('button', { name: 'Create an Account' }).click();
  const emailError = await page.locator("#email_address-error").textContent()
  const erroeMessage = "Please enter a valid email address (Ex: johndoe@domain.com)."
  expect(emailError).toBe(erroeMessage)
})

test("Try create account with existing email ", async ({ page}) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByLabel('Email', { exact: true }).fill("soleris1@gmail.com");
  await page.getByRole('button', { name: 'Create an Account' }).click();
})
