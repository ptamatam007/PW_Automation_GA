import {test,expect} from '@playwright/test';

test("Play wright getByRole locator, getBtText locators", async ({page})=> {

    await page.goto("https://google.com");

    await page.getByRole('link', {name: 'About'}).click();

    await page.waitForLoadState("domcontentloaded");
    
    await page.waitForTimeout(2000);
    await page.close();
})

test("Playwright GetByText locator", async ({page})=> {
    await page.goto("https://google.com");

    await page.waitForTimeout(1000);

    await page.getByText("Store").click();

    await page.waitForTimeout(1000);

    await page.close();
})

test("playwright getByLabel locator demo", async ({page})=> {
    await page.goto("https://orgfarm-35a72d89da-dev-ed.develop.my.salesforce.com/");

    await page.waitForLoadState("domcontentloaded");

    await page.getByLabel("Username").fill("Pradeep");

    await page.getByLabel("Password").fill("Test");

    await page.waitForTimeout(2000);

    await page.close();
})