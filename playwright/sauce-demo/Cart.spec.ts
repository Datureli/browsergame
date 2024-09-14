import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
});

test("Add product to cart", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  const cartCount = await page.locator('.shopping_cart_badge').innerText();
  expect(cartCount).toBe('1');
});

test("Remove product from cart", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
    let cartCount = await page.locator('.shopping_cart_badge').innerText();
    expect(cartCount).toBe('1');
  
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  
    const cartBadge = await page.locator('.shopping_cart_badge').count();
    expect(cartBadge).toBe(0);
});


test("Add two or more items to cart", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  
  const cartCount = await page.locator('.shopping_cart_badge').innerText();
  expect(cartCount).toBe('4');
})

