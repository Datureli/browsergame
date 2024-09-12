import { test, expect } from "@playwright/test";


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

test("Attempt to log in with an empty password field", async ({ page }) => {
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Password is required"
  );
});

test("Attempt to log in with a blocked user's account", async ({ page }) => {
  await page.locator('[data-test="username"]').fill("locked_out_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
});

test("Checking whether logging in with the problematic user still triggers the error that the photo thumbnail has been changed", async ({
  page,
}) => {
  await page.locator('[data-test="username"]').fill("problem_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator('[data-test="login-button"]').click();

  const thumbnailSrc = await page
    .locator('[data-test="item-4-img-link"] img')
    .getAttribute("src");

  await page.locator('[data-test="item-4-img-link"]').click();

  const detailsSrc = await page
    .locator('[data-test="item-sauce-labs-fleece-jacket-img"]')
    .getAttribute("src");

  expect(thumbnailSrc).toBe(detailsSrc);
});


test("Check whether the dashboard is displayed correctly for a user with a slow Internet connection", async ({ page }) => {
  await page.locator('[data-test="username"]').fill("performance_glitch_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

  await expect(page.locator('.shopping_cart_link')).toBeVisible();
});

