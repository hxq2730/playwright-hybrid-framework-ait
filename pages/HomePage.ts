import { BasePage } from "./BasePage";
import { type Locator, type Page } from "@playwright/test";

export class HomePage extends BasePage {
  readonly loginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.getByRole("link", { name: "Signup / Login" });
  }

  async clickLogin() {
    await this.loginLink.click();
  }
}
