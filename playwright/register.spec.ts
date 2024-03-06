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
/*
test.only("check password strength only with lowercase character - weak", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("misio");
  await page.waitForSelector('#password-strength-meter');
  const passwordStrength = await page.innerText('#password-strength-meter');
  expect(passwordStrength).toBe('Weak');
})
*/

test("Repeating a password with a different value", async ({ page }) => {
  const expectedErrorText = 'Please enter the same value again.';
  const passwordConfirmationError =   await page.locator('#password-confirmation-error').textContent();

  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("Misio150");
  await page.getByLabel('Confirm Password').fill("Misio151");

  await page.getByRole('button', { name: 'Create an Account' }).click();

  expect(passwordConfirmationError).toBe(expectedErrorText);
})

test.only("Password below 8 characters did not pass", async ({ page }) => {
  const passwordError = await page.locator("#password-error").textContent();
  const errorValue = "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("7length");
  await page.getByRole('button', { name: 'Create an Account' }).click();
 
  expect(passwordError).toBe(errorValue);
})
