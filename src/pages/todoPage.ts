import { expect, type Locator, type Page, type BrowserContext } from '@playwright/test';
import { BasePage } from './basePage';

export class TodoPage extends BasePage{
  constructor(page: Page) {
    super(page);
  }
}