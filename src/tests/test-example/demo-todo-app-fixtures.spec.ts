import { test, expect } from '@fixtures/fixtures';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page, todoPage}) => {
    // create a new todo locator
    const newTodo = todoPage.todoInput;
    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(todoPage.todoTitle).toHaveText([
      TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(todoPage.todoTitle).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ]);

    await todoPage.checkNumberOfTodosInLocalStorage(2);
  });

  test('should clear text input field when an item is added', async ({ page, todoPage }) => {
    // create a new todo locator
    const newTodo = todoPage.todoInput;

    // Create one todo item.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Check that input is empty.
    await expect(newTodo).toBeEmpty();
    await todoPage.checkNumberOfTodosInLocalStorage(1);
  });

  test('should append new items to the bottom of the list', async ({ page, todoPage }) => {
    // Create 3 items.
    await todoPage.createDefaultTodos(TODO_ITEMS);

    // Check test using different methods.
    await expect(page.getByText('3 items left')).toBeVisible();
    await expect(todoPage.todoCount).toHaveText('3 items left');
    await expect(todoPage.todoCount).toContainText('3');
    await expect(todoPage.todoCount).toHaveText(/3/);

    // Check all items in one call.
    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
    await todoPage.checkNumberOfTodosInLocalStorage(3);
  });

  test('should show #main and #footer when items added', async ({ page, todoPage }) => {
    // create a new todo locator
    const newTodo = todoPage.todoInput;

    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    await expect(page.locator('.main')).toBeVisible();
    await expect(page.locator('.footer')).toBeVisible();
    await todoPage.checkNumberOfTodosInLocalStorage(1);
  });
});