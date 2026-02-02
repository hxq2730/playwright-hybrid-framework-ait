import { test, expect } from "../../fixtures/baseFixture";

test.describe("UI Interaction", () => {
  test("TC01 - Verify Homepage Elements", async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle(/Restful-booker-platform demo/);
    await expect(homePage.hotelName).toBeVisible();
    await expect(homePage.welcomeHeading).toBeVisible();

    await expect(homePage.roomList.first()).toBeVisible();
    await expect(homePage.roomList).toHaveCount(3);
  });

  test("TC02 - Verify Submit Contact Form", async ({ homePage }) => {
    await homePage.submitContactForm(
      "Ho Xuan Quang",
      "hoxuanquangqt@gmail.com",
      "0123456789123",
      "Make a appointment",
      "I want to meet you in next week.",
    );
    await expect(homePage.successMessage).toBeVisible();
    await expect(homePage.successMessage).toHaveText(
      /Thanks for getting in touch/,
    );
  });

  test("TC03 - Verify Form validaton Error", async ({ homePage }) => {
    await homePage.clickSubmitOnly();
    await expect(homePage.errorMessage).toBeVisible();
    await expect(homePage.errorMessage).toContainText("Name may not be blank");
    await expect(homePage.errorMessage).toContainText("Email may not be blank");

    await expect(homePage.errorMessage).toContainText("Phone may not be blank");
    await expect(homePage.errorMessage).toContainText(
      "Phone must be between 11 and 21 characters",
    );

    await expect(homePage.errorMessage).toContainText(
      "Subject may not be blank",
    );

    await expect(homePage.errorMessage).toContainText(
      "Subject must be between 5 and 100 characters",
    );

    await expect(homePage.errorMessage).toContainText(
      "Message may not be blank",
    );
    await expect(homePage.errorMessage).toContainText(
      "Message must be between 20 and 2000 characters",
    );
  });
});
