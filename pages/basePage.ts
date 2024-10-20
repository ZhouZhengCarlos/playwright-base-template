import { expect, type Locator, type Page, type BrowserContext } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToNewPage(locator: Locator, context: BrowserContext) {
    const pagePromise = context.waitForEvent('page');
    await locator.click();
    const newPage = await pagePromise;
    return newPage;
  }
}