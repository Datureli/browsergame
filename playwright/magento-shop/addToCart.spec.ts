import { test, expect } from "@playwright/test";

// ✅ Wspólna logika przed każdym testem – akceptacja cookies jeśli się pojawi
test.beforeEach(async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  const cookiesPopup = page.getByLabel('Consent', { exact: true });

  if (await cookiesPopup.isVisible().catch(() => false)) {
    await cookiesPopup.click();
  }
});

test("Check if cart quantity changing after add item to cart", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/collections/yoga-new.html");

  await page
    .getByRole("link", { name: "Echo Fit Compression Short" })
    .first()
    .click();
  await page.waitForURL("**/echo-fit-compression-short.html");
  await page.click("#option-label-size-143-item-171");
  await page.click("#option-label-color-93-item-49");

  await page.getByRole("button", { name: "Add to Cart" }).click();

  await page.waitForSelector(".counter-number");
  const counterNumber = await page.innerText(".counter-number");
  expect(counterNumber).toBe("1");
});

test("Check if the item has been added to the cart", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/collections/yoga-new.html");

  await page
    .getByRole("link", { name: "Echo Fit Compression Short" })
    .first()
    .click();
  await page.waitForURL("**/echo-fit-compression-short.html");
  await page.getByLabel("28").click();
  await page.getByLabel("Black").click();

  await page.getByRole("button", { name: "Add to Cart" }).click();
  await page.getByRole("link", { name: " My Cart 1 1\nitems" }).click();
  await page.getByRole("link", { name: "View and Edit Cart" }).click();
  await page.goto("https://magento.softwaretestingboard.com/checkout/cart/");
  await page.waitForURL("**/checkout/cart/");

  const isProductVisible = await page
    .getByRole("cell", { name: "Echo Fit Compression Short" })
    .isVisible();
  await expect(isProductVisible).toBe(true);
});

test("check if the cart icon opens a modal window", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "My Cart" }).click();

  await expect(page.locator("#ui-id-1")).toBeVisible();
});

test("Check if there is information that the basket is empty", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "My Cart" }).click();

  await expect(
    page.getByText("You have no items in your shopping cart.")
  ).toBeVisible();
});

test("check if the active class is added to it after opening the basket icon", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole("link", { name: "My Cart" }).click();

  await expect(page.getByRole("link", { name: "My Cart" })).toHaveClass(
    /active/
  );
});
