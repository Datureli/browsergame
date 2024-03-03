import { test, expect } from "@playwright/test";

test.only("check register user", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByLabel('First Name').fill("Paweł");
  await page.getByLabel('Last Name').fill("Testowski");
  await page.getByLabel('Email', { exact: true }).fill("soleris1@gmail.com");
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill("Misio150");
  await page.getByLabel('Confirm Password').fill("Misio150");
  await page.getByRole('button', { name: 'Create an Account' }).click();
});

//test("can i repeat diffrent password")
