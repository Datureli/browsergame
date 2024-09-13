import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Metoda do przejścia na stronę
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Metoda do logowania
  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  // Pobranie wiadomości o błędzie
  async getErrorMessage() {
    // Czekamy na pojawienie się wiadomości o błędzie
    await this.page.waitForSelector('[data-test="error"]');
    return this.page.locator('[data-test="error"]');
  }

  // Sprawdzenie, czy inwentarz się załadował
  async isInventoryLoaded() {
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    await expect(this.page.locator('[data-test="inventory-container"]')).toBeVisible();
  }

  // Sprawdzenie, czy koszyk jest widoczny
  async checkCartVisibility() {
    await expect(this.page.locator('.shopping_cart_link')).toBeVisible();
  }

  // Pobranie źródła miniatury obrazka
  async getThumbnailSrc() {
    return this.page.locator('[data-test="item-4-img-link"] img').getAttribute('src');
  }

  // Pobranie źródła obrazka na stronie szczegółów
  async getDetailsSrc() {
    return this.page.locator('[data-test="item-sauce-labs-fleece-jacket-img"]').getAttribute('src');
  }
}
