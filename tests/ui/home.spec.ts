import {test, expect} from '../../fixtures/baseFixture';

test('Verify HomePage title and navigation', async ({homePage}) => {
    // 1. Navigate using the method from BasePage 
    await homePage.navigateTo('/');

    // 2. Interact using methods from Homepage
    await homePage.clickLogin();

    // 3. Assertion 
    await expect(homePage.page).toHaveURL(/.*login/);
} )