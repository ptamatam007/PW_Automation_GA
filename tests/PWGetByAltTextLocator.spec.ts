import {test,expect} from '@playwright/test';

test("playwright getByAltText locator", async ({page})=> {
    await page.goto("https://playwright.dev");

    await page.waitForLoadState("domcontentloaded");

    const logo= await page.getByAltText("Playwright logo2")

})