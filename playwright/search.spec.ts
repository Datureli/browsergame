import { test, expect } from "@playwright/test";

test("Check if the word search result appears with the selected word", async ({
  page,
}) => {
  await page.goto("https://magento.softwaretestingboard.com/");

  await page.getByPlaceholder("Search entire store here...").fill("yoga");
  await page.getByPlaceholder("Search entire store here...").press("Enter");

  await expect(
    page
      .getByRole("heading", { name: "Search results for: 'yoga'" })
      .locator("span")
  ).toBeVisible();
});

test("Check if there is a message stating that the search phrase must have at least 3 letters", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByPlaceholder("Search entire store here...").fill("?");
  await page.getByPlaceholder("Search entire store here...").press("Enter");

  await expect(page.getByText("Minimum Search query length is 31")).toBeVisible();
});
