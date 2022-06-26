# Maze TV

<p><img src="https://static.tvmaze.com/images/tvm-header-logo.png" width="450"></p>

## Monorepo Structure

`./libs` contains all the libraries for the apps as well as shared components.
To set a standardized consistent way of development, some helper tools such as `husky`, `lint-staged`, `prettier` and `commintlint` are used.

```
.
├── ...
├── apps                    # All the apps live in apps directory
│   ├── tv-shows            # Tv Shows app
│   └── tv-shows-e2e        # Tv Shows e2e testing app
│
├── libs                    # All the libs live in libs directory
│   ├── landing
│   ├── show-details
│   └── shared
│       ├── data-access
│       ├── ui
│       │   ├── nav-bar
│       │   └── search-box
│       └── utils
│           └── pipes
└── ...
```

## Quick start

- After installing packages with `yarn` you can serve the app with `ng serve`
- To run unit tests run `yarn test`
- To run e2e tests run `yarn e2e:tv-shows`

## Some remarks about the architectural decisions

- 🚀 I chose mono repo setup with Nx,
  - Makes following DDD (Domain Driven Design) principles easier using module boundaries
  - In case I need to add more apps to the same repo
  - Nx provides computation caching, which makes builds and tests run much faster
  - Provides Jest as first class citizen for unit testing
  - Provides Cypress as first class citizen for e2e testing
- 🤓 I used yarn because it is slightly faster than npm
- 🛡 Used htmlhint and added some rules, like preventing Reverse Tabnabbing etc.
- 🚦 Used some helper linting and formatting tools to keep the quality of code and commits high
- 🔨 Added github actions for a simple ci/cd pipeline
- 💄 Created my own theme extending angular material theming, ans used Angular Material component library for a consistent look across the app
- 📱 Mobile first approach is followed for better user experience
  - Created custom breakpoints with mixins for consistent responsive design
- 🛫 I used spectator for a better unit testing experience
- 🏎 Used OnPush change detection strategy for components for a better performance
- Created reusable pipes for filtering tv shows by genre and season
- I added class names starting with 🤖 icons for e2e testing. This is to make it easier in the future if I want to make changes to e2e tests

## Understand the workspace

- Run `yarn dep-graph` to see a diagram of the dependencies

## Commit format

There is a commit linter. Only certain commit formats will be accepted:

Format: `<type>(<scope>): <subject>`

### Example

```
feat(general): add feature X for movie component
^──^ ^──────^  ^─────────────────────────────────^
 │     │                │
 │     │                └───> Summary in present tense.
 │     │
 │     └────────────────────> Scope: shared, general.
 │
 └──────────────────────────> Type: build, ci, chore, docs, feat, fix, perf, refactor, revert, style, test, version.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
