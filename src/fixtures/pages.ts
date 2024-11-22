import { TodoPage } from '@pages/todoPage';
import { test as base } from '@playwright/test';
type ComponentFixtures = {
    todoPage: TodoPage;
};

export const test = base.extend<ComponentFixtures>({
    todoPage: async ({ page }, use) => {
        await use(new TodoPage(page));
    },
});