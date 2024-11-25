
# Playwright base architecture

This repository provides a foundational structure for Playwright using the Page Object Model (POM) pattern with advanced fixtures. Although these fixtures are optional, they significantly enhance your testing capabilities. This setup is designed to simplify the learning journey for Playwright automation testing and includes a summary of key documentation points.

## Pre-conditions
Ensure you have a basic understanding of the following concepts:
* JavaScript/TypeScript
* Git (you probably already have some experience if you’re here)
* HTML/CSS fundamentals

## Setup
* clone this repo
* execute ```npm i```
* execute ```npx playwright install```

## Recomendations
* I highly recommend reading the official Playwright documentation. If you’re short on time, focus on these sections:
    * [Writing tests](https://playwright.dev/docs/writing-tests)
    * [Assertions](https://playwright.dev/docs/test-assertions)
    * [Actions](https://playwright.dev/docs/input)
    * [Locators](https://playwright.dev/docs/locators)
    * [Fixtures](https://playwright.dev/docs/test-fixtures)
    * [Page Object Models](https://playwright.dev/docs/pom)
    * [Auto-waiting](https://playwright.dev/docs/actionability)
    * [Best Practices](https://playwright.dev/docs/best-practices)
* Tip: When you need help with Playwright, start with the official docs before searching elsewhere. It’s usually the fastest way to find reliable information.

## Folder structure
    ├── src                            # Source files
    │  ├── environments                # Environment configuration files
    │  ├── fixtures                    # Custom fixtures
    │  ├── helpers                     # Utility functions
    │  ├── pages                       # Page Object Model classes
    │  ├── test-data                   # Test data files
    │  ├── test                        # Test files (alternatively `spec` or `tests`)   
    │  │  ├── test-example             # Test example files 
    ├── .gitignore                     
    ├── LICENSE                        
    ├── README.md                      # Documentation
    ├── globalSetup.ts                 # Run before the execution
    ├── package-lock.json               
    ├── package.json                   
    ├── playwright.config.ts           # Playwright configuration file
    ├── tsconfig.json     
## Writing Tests

Writing tests with Playwright is straightforward and follows a simple pattern. Tests are designed to interact with your web application, simulate user actions, and assert expected behaviors. 

For more detailed information, refer to the official documentation on [Writing Tests](https://playwright.dev/docs/writing-tests).

### Playwright Test Flow:
1. **Perform Actions**: Interact with web elements using functions like `click`, `type`, `fill`, etc.
2. **Assert the State**: Verify the outcome of the actions by making assertions on elements' states (e.g., visibility, text content, etc.).

### Test Structure:

A typical test is structured using the following components:
- `describe`: Groups related tests together.
- `test`: Contains the actual steps of the test (e.g., actions and assertions).
- `beforeEach` (optional): Code that runs before each test in the group.
- `afterEach` (optional): Code that runs after each test in the group.

More about test functions: [Writing Tests](https://playwright.dev/docs/writing-tests)

### Example Code:

```javascript
import { test, expect } from '@playwright/test';

// Grouping related tests using describe block
test.describe("My Test Suite", () => {

  // Optional: Runs before each test case
  test.beforeEach(async ({ page }) => {
    // Code to navigate to the page or setup state before each test
    await page.goto("https://example.com");
  });

  // Optional: Runs after each test case
  test.afterEach(async ({ page }) => {
    // Code to clean up after each test (e.g., logging out)
  });

  // The actual test case
  test("Check element visibility", async ({ page }) => {
    const element = page.locator('your-selector');  // Interacting with the element

    // Performing actions
    await element.click();

    // Performing assertions
    await expect(element).toBeVisible();
  });

});
```

### Key Concepts:
- **Actions**: To perform actions on elements, we use Playwright's page fixtures. The `locator()` function helps us find elements on the page using selectors (e.g., CSS selectors or XPath). Once we have a reference to an element, we can interact with it by clicking, typing text, hovering, etc.
  
- **Assertions**: To verify that the actions have resulted in the expected state, we use the `expect` function. Playwright's `expect` allows us to assert different conditions like visibility, text content, and other element properties.

   For more details on assertions, refer to the Playwright documentation: [Test Assertions](https://playwright.dev/docs/test-assertions).


## Environments
This project uses environment variables to configure settings such as BASEURL, APIURL, and other environment-specific values. These variables are stored in .env files, with each environment having its own separate configuration file. \
Example .env.production File
```
BASEURL = https://www.yousite.com
APIURL = https://www.youapi.com
```
The environment variables are loaded into the Node.js process.env object, which can be accessed throughout the application.

### Setup Process
Before tests are executed, the environment variables are set up using a globalSetup.ts script. This script loads the appropriate .env file based on the environment specified.
```
import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

async function globalSetup(config) {
  if(process.env.test_env === undefined) {
    process.env.test_env = 'production';
  }
  dotenv.config({
    path: `./src/helpers/env/.env.${process.env.test_env}`,
    override: true,
  });
}
module.exports = globalSetup;
```
This script ensures that the correct environment file is loaded before any tests are run.

### Running Tests with Specific Environments
To run the tests for a specific environment, you can pass the test_env parameter to specify which environment configuration to use.

For example, to run the tests using the staging environment:
```
npx playwright test --env test_env=staging
```
This will load environment variables from the .env.staging file. If no environment is specified, the script defaults to loading the .env.production file.

### Notes
* Ensure that .env files are created for each environment (e.g., .env.production, .env.test, .env.staging, etc.).
* You can specify any environment (such as test, staging, or production) by setting the test_env parameter when running tests.

## Page Object Model
Reference [POM](https://playwright.dev/docs/pom)

### Introduction
Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.

A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models.

Component ObjectModel works haves the same foundation, but this focused on components rather than a page. This because on usual frontend frameworks developers tends to use react, angular, vue and other popular front end frameworks, this use components to build the UI. Usually components are shared across other pages so creating a component object will help to have a better maintainability on our automation tests

```javascript
import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
}
```
We store our locators in this page object along with their initialization also we store some functions that are usually executed repeatedly such as signing in or logging off. (Components object have the same structure but focusing on the component itself). \

This is how this page object is used on our tests:

```javascript
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-page';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});
```
We import our page object into our test file and we get it functions and locators, doing this if in the future a selector is changed on our application under test we won’t need to change the selector on each tests, we can change only the selector inside the page object to fix the problem.

## Fixtures
Reference [Fixtures](https://playwright.dev/docs/test-fixtures)
Test fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup.

### Built-in fixtures
You saw your first fixtures on the Writing tests section of this guide.
```javascript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
```
The { page } argument tells Playwright Test to setup the page fixture and provide it to your test function. (Here the list of built in fixtures [Fixtures](https://playwright.dev/docs/test-fixtures) ).

## Create your fixture
Reference [Creating a fixture](https://playwright.dev/docs/test-fixtures#creating-a-fixture)
In our test framework project we created our custom fixtures to add a variety of assets for our tests, we create fixtures for:
* Page/Component objects
* Helpers
* Variables
On our fixtures folder we contain a file to add up our fixtures, this is an example of our VariablesFixture code:
```javascript
import { test as base } from "@playwright/test";
//We declare a type for our VariablesFixture
type VariablesFixtures = {
  isProduction: boolean;
  baseUrl: string;
};

//We extend test from Playwright using our VariablesFixtures type
export const test = base.extend<VariablesFixtures>({
//Here we initialize our fixtures
  isProduction: async ({}, use) => {
    await use(process.env.test_env === "production");
  },
  baseURL: async ({}, use) => {
    await use(process.env.BASEURL);
  },
});
```
Once we have this VariablesFixture we merge it with all of the others fixtures that exists in our repo in Fixtures.ts
```javascript
import { mergeTests } from "@playwright/test";
import { test as components } from "@fixtures/components";
import { test as helpers } from "@fixtures/helpers";
import { test as variables } from "@fixtures/variables";
import { test as page } from "@fixtures/page";
import { test as pages } from "@fixtures/pages";

export const test = mergeTests(components, helpers, variables, page, pages);
export { expect } from "@playwright/test";
```
On our tests we use “test” from our fixtures instead of Playwright, because we are overriding this object to be able to use our fixtures, here an example of a test using fixtures:
```javascript
  import { test, expect } from "@fixtures/fixtures";
  
  test("Dummy test", async ({ baseUrl, page, isProduction }) => {
    await page.goto(baseUrl);
    if(isProduction) {
    //do something
    }
  });
```
Note that we are able to use isProduction and baseUrl fixtures because we are using our fixtures test instead of Playwright.

Now you're ready to set up and maintain robust Playwright test suites!
