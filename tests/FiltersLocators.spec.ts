import {test,expect} from '@playwright/test';

test("Filter locators ", async ({page}) => {

    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    const bar = await page.locator(".navbar__item.navbar__link");
    
    await bar.filter({hasText: 'API'}).click();

    await page.waitForTimeout(5000);
    await page.close();
})