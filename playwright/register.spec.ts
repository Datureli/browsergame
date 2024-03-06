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

test.only("Repeating a password with a different value", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("Misio150");
  await page.getByLabel('Confirm Password').fill("Misio151");

  await page.getByRole('button', { name: 'Create an Account' }).click();

  const expectedErrorText = 'Please enter the same value again.';
  const passwordConfirmationError =   await page.locator('#password-confirmation-error').textContent();

  expect(passwordConfirmationError).toBe(expectedErrorText);
})
