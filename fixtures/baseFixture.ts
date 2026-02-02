import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

// Declare the types of the Fixtures (help VScode guide code when coding)
type MyFixtures = {
  homePage: HomePage;
  // loginPage: LoginPage;
};

// Extend the base test to include the fixtures
export const test = base.extend<MyFixtures>({
    // define fixture homePage
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  // add more page
});

export { expect } from "@playwright/test";
