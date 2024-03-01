import { test, expect } from "@playwright/test";

test("Try add item to cart", async ({ page }) => {
  await page.goto(
    "https://magento.softwaretestingboard.com/collections/yoga-new.html"
  );

  await page.getByRole("link", { name: "Echo Fit Compression Short" }).first().click();
  await page.waitForURL("**/echo-fit-compression-short.html", { timeout: 5000 });

  await page.getByRole("button", { name: "Add to Cart" }).click();
});
