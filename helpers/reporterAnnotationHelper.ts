import { test, type Locator, type Page } from '@playwright/test';

export async function setAnnotation(type: string, description: string) {
  test.info().annotations.push({
    type: type,
    description: description,
  });
}

export async function setEnvironmentAnnotations(page: Page) {
    await setAnnotation("Page Url", page.url());
}