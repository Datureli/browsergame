import { test, expect } from "@playwright/test";
import { LoginPage } from "./pageObjectModel/LoginPage";
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("Check if the correct login redirects the user to the dashboard", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("standard_user", "secret_sauce");
  await loginPage.isInventoryLoaded();
});

test("Check login with incorrect credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("new_user", "secret_sauce");
  await expect(await loginPage.getErrorMessage()).toBeVisible();
});

test("Attempt to log in with empty fields", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.locator('[data-test="login-button"]').click();
  await expect(await loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Attempt to log in with an empty user field", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.locator('[data-test="password"]').fill("dsdsa");
  await page.locator('[data-test="login-button"]').click();
  await expect(await loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Attempt to log in with an empty password field", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="login-button"]').click();
  await expect(await loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Password is required"
  );
});

test("Attempt to log in with a blocked user account", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("locked_out_user", "secret_sauce");
  await expect(await loginPage.getErrorMessage()).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
});

test("Check if logging in with the problematic user still shows the changed thumbnail", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("problem_user", "secret_sauce");

  const thumbnailSrc = await loginPage.getThumbnailSrc();
  await page.locator('[data-test="item-4-img-link"]').click();
  const detailsSrc = await loginPage.getDetailsSrc();

  expect(thumbnailSrc).toBe(detailsSrc);
});

test("Check whether the dashboard is displayed correctly for a user with a slow Internet connection", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("performance_glitch_user", "secret_sauce");
  await loginPage.isInventoryLoaded();
  await loginPage.checkCartVisibility();
});
