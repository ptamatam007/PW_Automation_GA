import {test,expect} from '@playwright/test';

test("Handle Iframes ", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default");

    await page.waitForTimeout(6000);

    const frame = await page.frameLocator('[id="iframeResult"]');

    
})