
# Playwright base architecture

This repo serves as a base for a Playwright architecture using Page Object Model pattern and advanced fixtures. You can omit using this advanced fixtures but they are pretty handy.\
I created this repo for teaching and making easy the learning path for Automation tests with Playwright.

## Pre-conditions
* Javascript/Typescript basic knowledge
* Git basic knowledge (If you're here you might already have experience).
* Basic HTML/CSS knowledge


## Recomendations
* I learned Playwright only reading the [Playwright docs](https://playwright.dev/docs/intro). I encourage you to read it
* If you're lazy as myself you can read the following pages from the documentation in order:
    * [Writing tests](https://playwright.dev/docs/writing-tests)
    * [Assertions](https://playwright.dev/docs/test-assertions)
    * [Actions](https://playwright.dev/docs/input)
    * [Locators](https://playwright.dev/docs/locators)
    * [Fixtures](https://playwright.dev/docs/test-fixtures)
    * [Page Object Models](https://playwright.dev/docs/pom)
    * [Auto-waiting](https://playwright.dev/docs/actionability)
    * [Best Practices](https://playwright.dev/docs/best-practices)
* Personal recommendation: Usually when I need to do something for my tests and I use Playwright docs to search what I need to do. We always have our old handy Google Search, but I recommend you to go to the docs first.

## Folder structure
    ├── src                            # Source files
    │  ├── environments                # Environment files
    │  ├── fixtures                    # Fixtures files
    │  ├── helpers                     # Helpers
    │  ├── pages                       # Page object classes
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
