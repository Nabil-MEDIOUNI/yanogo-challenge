<h1 align="center">
  YANOGO Challenge
</h1>

Intro Description

# Essential rules

- Code must be linted and formatted
- Do not leave irrelevant trailing comments or commented code blocks
- Do not leave unused files or assets
- No inline style (except for less common instances when style linked to runtime logic)
- Image sizes must be web friendly (max 300kb unless rendered in a special vision mode)
- Don't use `eslint-disable` nor change config files for linting and formatting (except for rare agreed exceptions)
- Code must be pushed whenever possible, at least once every worked days
- Make sure code is tested both in dev and build mode before submitting to CI/CD `npm run serve`
- Make sure metadata is nice and sweet (favicon, SEO titles/desc, path names...etc.)
- Path names must be SEO friendly, sluggified localized when needed
- A website is considered incomplete as long as it's not W3C compliant (or almost compliant). Use the W3C validator.
- A website isn't considered efficient until at least Lighthouse says so (perf, SEO, image sizes...etc.).

# Setup

## Prerequisites

- Make sure you have an up-to-date NodeJS version (an LTS)
- Prefer Unix-based environments to Windows
- Preferably VSCode with recommended extensions supplied in `.vscode/extensions`

## Website setup

Start website in developer mode

```shell
cd website-repo-slug-name/
npm start

create .env file and insert this data:
REACT_APP_API_URL = http://localhost:8000
```

**Important note** When adding dependencies or updating them, use `npm` and not `yarn`

# Folder structure

    .
    ├── public
    ├──────── index.html
    .
    .
    .
    ├── src
    ├────── assets
    ├────── components
    ├────── data
    ├────── redux
    ├────── utils
    ├── package.json => WARNING: You must inform project manager on the project group chat when installing extra-dependencies or updating ones
    ├──
    .
    .
    .
    ├──
    └── ...

# Linting and formatting

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also
  installed as a pre-commit hook through Husky

# Committing code

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

- Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
- Patch example: `git commit -m "fix: Closes ISS-2 and corrects scrolling bug"`
- Major/Breaking change example: `git commit -m "BREAKING CHANGE: Updated website version"`
- Combines feature and breaking change:
- Major/Breaking change example:

  `git commit -m "feat: Closes ISS-1. Ability to login with Apple BREAKING CHANGE"`

- Commits not impacting versioning:

  - Regular / casual example: `git commit -m "chore: ISS-4 Installed dependencies"`
  - Refactoring example: `git commit -m "refactoring: Refactored component"`
  - Other commit types: _build:, chore:, ci:, docs:, style:, refactor:, perf:, test_

- The standard is linted and Husky will prevent commits from going through if it's not compliant
- Project managers/owners can release satisfying updates and issue version bumps thanks to [standard-version](https://github.com/conventional-changelog/standard-version) by running `npm run release`. This will generate:
- Appropriate tags based on the conventional commit history
- An aggregated `CHANGELOG.md` file update.
