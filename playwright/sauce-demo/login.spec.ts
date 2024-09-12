import { test, expect } from "@playwright/test";

// Użyj funkcji beforeEach, aby przed każdym testem otworzyć stronę
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("Check if the correct login redirects the user to the dashboard", async ({
  page,
}) => {
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Check login with incorrect credential", async ({ page }) => {
  await page.locator('[data-test="username"]').fill("new_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test("Check login function with correct credential", async ({ page }) => {
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Attempt to log in with empty fields", async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Attempt to log in with an empty user field", async ({ page }) => {
  await page.locator('[data-test="password"]').fill("dsdsa");
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Attempt to log in with an empty password field", async ({ page}) => {
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Password is required")
})
