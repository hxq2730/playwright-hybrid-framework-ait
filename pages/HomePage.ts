import { BasePage } from "./BasePage";
import { type Locator, type Page, expect } from "@playwright/test";

export class HomePage extends BasePage {
  readonly hotelName: Locator;
  readonly welcomeHeading: Locator;
  readonly roomList: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.hotelName = this.page.getByRole("link", { name: "Shady Meadows B&B" });
    this.welcomeHeading = this.page.getByRole("heading", {
      name: "Welcome to Shady Meadows B&B",
    });
    this.roomList = this.page.locator("#rooms .room-card");

    // Send us a message
    this.nameInput = this.page.getByTestId("ContactName");
    this.emailInput = this.page.getByTestId("ContactEmail");
    this.phoneInput = page.getByTestId("ContactPhone");
    this.subjectInput = page.getByTestId("ContactSubject");
    this.messageInput = page.getByTestId("ContactDescription");
    this.submitButton = page.getByRole("button", { name: "Submit" });

    // Message
    this.successMessage = page.getByRole('heading', {name: /Thanks for getting in touch/i});
    this.errorMessage = page.locator(".alert-danger");
  }

  // Action
  async goto() {
    await this.page.goto("/");
  }

  async submitContactForm(
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
    await this.submitButton.click();
  }

  async clickSubmitOnly() {
    await this.submitButton.click();
  }
}
