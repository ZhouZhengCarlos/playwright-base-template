import { test, type Locator, type Page } from '@playwright/test';

export function getRandomElementFromArray(array: Array<any>) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}