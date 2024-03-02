import { test, expect } from "@playwright/test";

test("Check if cart quantity changing after add item to cart", async ({
  page,
}) => {
  await page.goto(
    "https://magento.softwaretestingboard.com/collections/yoga-new.html"
  );

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

test("check if item has been added to cart", async ({ page }) => {
  await page.goto(
    "https://magento.softwaretestingboard.com/collections/yoga-new.html"
  );

  await page
    .getByRole("link", { name: "Echo Fit Compression Short" })
    .first()
    .click();
  await page.waitForURL("**/echo-fit-compression-short.html");
  await page.click("#option-label-size-143-item-171");
  await page.click("#option-label-color-93-item-49");

  await page.getByRole("button", { name: "Add to Cart" }).click();
  await page.getByText("My Cart").click();
  await page.getByText("View and Edit Cart").click();

  await page.waitForURL("**/checkout/cart/");

  await page.waitForSelector(
    'td.col.item a[title="Echo Fit Compression Short"]'
  );

  // Możesz również sprawdzić, czy element jest widoczny, korzystając z isVisible
  const isProductVisible = await page.isVisible(
    'td.col.item a[title="Echo Fit Compression Short"]'
  );
  expect(isProductVisible).toBe(true);
});

test.only("check if the cart icon opens a modal window", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByRole('link', { name: 'My Cart' }).click();
  
  await expect(page.locator('#ui-id-1')).toBeVisible();
});
