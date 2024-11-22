import { expect, type Locator, type Page, type BrowserContext } from '@playwright/test';
import { BasePage } from './basePage';

export class TodoPage extends BasePage{
  readonly todoInput: Locator;
  readonly todoTitle: Locator;
  readonly todoCount: Locator;
  readonly mainSection: Locator;
  readonly footerSection: Locator;
  constructor(page: Page) {
    super(page);
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.todoTitle = page.getByTestId('todo-title');
    this.todoCount = page.getByTestId('todo-count');
    this.mainSection = page.locator('.main');
    this.footerSection = page.locator('.footer');
  }

  async createDefaultTodos(TODO_ITEMS) {
    // create a new todo locator
    const newTodo = this.page.getByPlaceholder('What needs to be done?');
  
    for (const item of TODO_ITEMS) {
      await newTodo.fill(item);
      await newTodo.press('Enter');
    }
  }
  
  async checkNumberOfTodosInLocalStorage(expected: number) {
    return await this.page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
  }
}