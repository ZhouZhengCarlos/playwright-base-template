import { expect, type Locator, type Page, type BrowserContext } from '@playwright/test';

export class BaseComponent {
  readonly page: Page;
  readonly loaderLogo: Locator;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToNewTab(locator: Locator, context: BrowserContext) {
    const pagePromise = context.waitForEvent('page');
    await locator.click();
    const newPage = await pagePromise;
    return newPage;
  }
}