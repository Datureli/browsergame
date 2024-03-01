import { test, expect } from "@playwright/test";

test("Check if cart quantity changing after add item to cart", async ({ page }) => {
  await page.goto(
    "https://magento.softwaretestingboard.com/collections/yoga-new.html"
  );

  await page.getByRole("link", { name: "Echo Fit Compression Short" }).first().click();
  await page.waitForURL("**/echo-fit-compression-short.html");
  await page.click("#option-label-size-143-item-171");
  await page.click("#option-label-color-93-item-49");

  await page.getByRole("button", { name: "Add to Cart" }).click();

  await page.waitForSelector('.counter-number');
  const counterNumber = await page.innerText('.counter-number');
  expect(counterNumber).toBe('1');
});
